"use client"

import Image from "next/image";
import Link from "next/link";
import Favorite from "../features/Favorite";
import Percentage from "./Percentage";
import { Movie } from "@/types/movie";

type Props = {
    data?: Movie[];
    title: string
}

export default function Row({ data, title }: Props) {

    const urlImage = 'https://image.tmdb.org/t/p/w500'


    return (
        <section className="h-auto flex flex-col">

            <div className="uppercase flex flex-col justify-between md:w-96">
                <h2 className="text-2xl md:text5xl max-w-xs font-semibold text-[#FFFFFF]">
                    {title}
                </h2>
                <div className="flex justify-between items-center">
                    <p className="mt-1 md:mt-0 text-xs md:text-sm uppercase text-gray-300 tracking-wider">
                        Scroll To Next →
                    </p>
                </div>
            </div>

            <div className="w-full mt-4 ml-2 md:ml-0 overflow-x-auto no-scrollbar flex gap-x-4">
                {data &&
                    data.map((movie) => (
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
                    ))}
            </div>
        </section>
    )
}
