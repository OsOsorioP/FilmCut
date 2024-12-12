import { fetchNowPlaying } from "@/lib/api"

import { Badge } from "@/components/ui/badge"

import { genres } from '@/constants/genres'

import Link from 'next/link'
import React from 'react'

export default async function MovieDetails() {
    const urlImage = 'https://image.tmdb.org/t/p/original'

    const banners = await fetchNowPlaying()

    if (!banners) {
        return <div>Loading...</div>
    }

    const banner: Movie = banners[0]

    return (
        <div
            className='relative h-[560px] w-full'
            style={{
                backgroundImage: `
                url(${urlImage + banner.backdrop_path})
            `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
            <div className='absolute z-10 flex flex-col ml-4 md:ml-8 pt-40 text-white'>
                <h1 className=' text-3xl md:text-text-3xl lg:text-[35px] lg:leading-[39px] lg:font-[700] font-bold text-gray-300'>
                    {`${banner.original_title} (${banner.release_date.split("-")[0]})`}
                </h1>

                <div className='mt-2 md:mt-4 flex items-center gap-x-2 md:gap-x-4 text-gray-300 text-xs md:text-base'>
                    <p>{banner.release_date.split("-")[0]}</p>
                    {" ° "}
                    <div className='flex items-center gap-x-1 md:gap-x-2 '>
                        {banner.genre_ids.map((genreId: number) => (
                            <Badge key={genreId} variant="outline" className=' py-[8px] px-[16px] text-[#F1CB51] '>
                                {genres.find((genre) => genre.id === genreId)?.name}
                            </Badge>
                        ))}
                    </div>
                </div>

                <p className='mt-4 md:mt-8 text-[20px] leading-[24px] font-[700] md:text-lg max-w-96 md:max-w-4xl'>
                    {banner.overview}
                </p>

            </div>

            <div className='absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent' />
        </div>
    )
}
