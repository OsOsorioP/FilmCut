import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'

export default function MovieCard({ movie }: { movie: Movie }) {
    const urlImage = 'https://image.tmdb.org/t/p/w500'
    const getColor = (percentage: number) => {
        if (percentage < 33) return 'var(--color-red)';
        if (percentage < 66) return 'var(--color-orange)';
        return 'var(--color-green)';
    };

    return (
        <Link href={`/movie/${movie.id}`}>
            <div
                key={movie.id}
                className="w-[200px] h-[335px] bg-[#262626] rounded-lg shadow-lg"
            >
                <Image
                    src={urlImage + movie.poster_path}
                    alt={movie.title}
                    width={500}
                    height={500}
                    className="object-cover min-w-[200px] min-h-[223px] h-[223px] cursor-pointer rounded-t-lg"
                />

                <div className="text-[#F6F6F6] p-[8px]">
                    <h3 className="leading-[20px] text-[14px] font-[700] ">
                        {movie.title}
                    </h3>
                    <p className="font-[400] text-[9px] leading-[10px] py-[8px]">
                        {movie.release_date}
                    </p>
                    <div className="flex justify-center items-center text-center w-full h-[45px] gap-[20px]">
                        <div className="felx flex-col gap-[10px]">
                            <p className="font-[400] text-[9px] leading-[10px] pb-2">Rating</p>
                            <div
                                className="circleContainer"
                                style={{ background: `conic-gradient(${getColor(movie.vote_average * 10)} 0% ${(movie.vote_average * 10) * 3.6}deg, lightgray ${(movie.vote_average * 10) * 3.6}deg 100%)` }}
                            >
                                <div className="circle">
                                    <p className="font-[400] text-[9px] leading-[10px] text-center ">{Math.round(movie.vote_average * 10)}%</p>
                                </div>
                            </div>
                        </div>
                        <div className="felx flex-col gap-[20px] justify-center">
                            <p className="font-[400] text-[9px] leading-[10px] pb-2">Favorites</p>
                            <Heart className="w-[25px] h-[25px]" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
