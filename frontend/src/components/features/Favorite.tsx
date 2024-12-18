"use client"
import { fetchAddFavorite, fetchGetFavorites, fetchRemoveFavorite } from '@/lib/api';
import { Heart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useModal } from '@/context/ModalContext';
import { useSession } from 'next-auth/react';

interface Props {
    w: number;
    h: number;
    movieId: number;
}

export default function Favorite({ w, h, movieId }: Props) {
    const [favorites, setFavorites] = useState<number[]>([]);
    const [userId, setUserId] = useState(0)
    const { data: session, status } = useSession();
    const { openModal } = useModal();

    useEffect(() => {
        if (session?.user) {
            setUserId(session?.user.id);
        }
    }, [session]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const data = await fetchGetFavorites(userId);
                setFavorites(data);
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        };

        fetchFavorites();
    }, [userId]);

    const isFavorite = (movieId: number): boolean => {
        return favorites.includes(movieId);
    };

    const handleAddFavorite = async () => {
        try {
            await fetchAddFavorite(userId, movieId);
            const data = await fetchGetFavorites(userId);
            setFavorites(data);
        } catch (error) {
            console.error('Error adding favorite:', error);
        }
    };

    const handleRemoveFavorite = async () => {
        try {
            await fetchRemoveFavorite(userId, movieId);
            const data = await fetchGetFavorites(userId);
            setFavorites(data);
        } catch (error) {
            console.error('Error removing favorite:', error);
        }
    };

    const toggleFavorite = async () => {
        if (isFavorite(movieId)) {
            await handleRemoveFavorite();
        } else {
            await handleAddFavorite();
        }
    };

    return (
        <div className='flex justify-center cursor-pointer' >
            {userId > 0 ?
                <Heart
                    onClick={() => toggleFavorite()}
                    className={`w-[${w}] h-[${h}]`}
                    style={{ color: isFavorite(movieId) ? 'red' : 'white' }}
                />
                :
                <Heart
                    onClick={openModal}
                    className={`w-[${w}] h-[${h}]`}
                    style={{ color: 'white' }}
                />
            }
        </div>
    )
}