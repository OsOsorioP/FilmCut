import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Favorite from '../features/Favorite'
import Percentage from './Percentage'

export default function MovieCard({ movie }: { movie: Movie }) {
    const urlImage = 'https://image.tmdb.org/t/p/w500'

    return (
            <div
                key={movie.id}
                className="w-[200px] h-[335px] bg-[#262626] rounded-lg shadow-lg"
            >
                <Link href={`/movie/${movie.id}`}>
                    <Image
                        src={urlImage + movie.poster_path}
                        alt={movie.title}
                        width={500}
                        height={500}
                        className="object-cover min-w-[200px] min-h-[223px] h-[223px] cursor-pointer rounded-t-lg"
                    />
                </Link>

                <div className="text-[#F6F6F6] p-[8px]">
                    <h3 className="leading-[20px] h-[20px] text-[14px] font-[700] overflow-x-auto no-scrollbar ">
                        {movie.title}
                    </h3>
                    <p className="font-[400] text-[9px] leading-[10px] py-[8px]">
                        {movie.release_date}
                    </p>
                    <div className="flex justify-center items-center text-center w-full h-[45px] gap-[20px]">
                        <div className="felx flex-col gap-[10px]">
                            <p className="font-[400] text-[9px] leading-[10px] pb-2">Rating</p>
                            <Percentage
                                percentage={movie.vote_average}
                                width={25}
                                height={25}
                                font={400}
                                text={9}
                            />
                        </div>
                        <div className="felx flex-col gap-[20px] justify-center">
                            <p className="font-[400] text-[9px] leading-[10px] pb-2">Favorites</p>
                            <div className="flex justify-center items-center">
                                <Favorite w={25} h={25} movieId={movie.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
