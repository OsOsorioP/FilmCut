import { fetchNowPlaying } from '@/lib/api'
import Link from 'next/link'
import React from 'react'
import Favorite from '../features/Favorite'
import Percentage from './Percentage'

export default async function Banner() {
    const urlImage = "https://image.tmdb.org/t/p/original"

    const banners = await fetchNowPlaying()

    if (!banners) {
        return <div>Loading...</div>;
    }

    const bannerNumber = Math.floor(Math.random() * banners.length)

    const banner: Movie = banners[bannerNumber]

    return (
        <div
            className='relative h-[436px] mt-[69px] w-full shadow-inner'
            style={{
                backgroundImage: `
                url(${urlImage + banner.backdrop_path})
            `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
            <div className='absolute bottom-0 left-0 z-10 flex flex-col ml-4 md:mx-[60px] md:my-[30px] text-white'>
                <h1 className=' text-3xl md:text-text-3xl lg:text-[35px] lg:leading-[39px] lg:font-[700] font-bold text-gray-300'>
                    {banner.original_title}
                </h1>
                <div className="flex flex-col md:flex-row justify-between gap-[100px]">
                    <p className='h-[75px] mt-4 md:mt-8 text-[20px] leading-[24px] font-[700] md:text-lg max-w-96 md:max-w-4xl overflow-x-auto no-scrollbar'>
                        {banner.overview}
                    </p>
                    <div className="flex flex-row justify-center text-center gap-[20px]">

                        <div className='flex justify-center items-center'>
                            <Favorite w={25} h={25} movieId={banner.id} />
                        </div>
                        <Percentage
                            percentage={banner.vote_average}
                            width={92}
                            height={92}
                            text={28}
                            font={700}
                        />
                    </div>
                </div>

            </div>

            <div className='absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent' />
        </div>
    )
}
