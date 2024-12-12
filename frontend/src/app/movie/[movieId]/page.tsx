import { fetchMovieById, fetchRecommendations } from "@/lib/api";
import Row from "@/components/Row";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"

import { genres } from "@/constants/genres";
import { CalendarRangeIcon, StarIcon, Play, Heart } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

type Props = {
    params: {
        movieId: string;
    }
}

export default async function MoviePage({ params }: Props) {
    const urlImage = 'https://image.tmdb.org/t/p/original'
    const movieId = params.movieId
    
    const movie: Movie = await fetchMovieById(movieId)
    const recomendations = await fetchRecommendations(movieId)

    const getColor = (percentage: number) => {
        if (percentage < 33) return 'var(--color-red)';
        if (percentage < 66) return 'var(--color-orange)';
        return 'var(--color-green)';
    };

    return (
        <main
            className="min-h-screen"
        >
            <div
                className='relative h-[560px] w-full'
                style={{
                    backgroundImage: `
                url(${urlImage + movie.backdrop_path})
            `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>

                <div className="absolute z-10 top-10 flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-16 p-10 md:p-20">

                    <div className="flex flex-col justify-center gap-2">
                        <Image
                            src={`${urlImage + movie.poster_path}`}
                            alt={movie.title}
                            width={500}
                            height={750}
                            className="hidden md:block h-80 w-52 md:h-96 md:w-64"
                        />
                        <Button className="bg-[#F0B90B] text-[#343434] hover:text-white">Official Trailer <Play /> </Button>
                    </div>
                    <div className="space-y-8 text-gray-300 max-w-3xl">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            {`${movie.original_title} (${movie.release_date.split("-")[0]})`}
                        </h1>
                        <div className="flex items-center gap-x-8">
                            <div className="text-lg font-medium flex items-center gap-x-2">
                                <CalendarRangeIcon className="size-5" />
                                {movie.release_date}
                            </div>
                            <div className="flex items-center gap-x-2">
                                {movie.media_types}
                            </div>
                        </div>
                        <p className="text-xl text-gray-300">
                            {movie.overview}
                        </p>

                        <div className="flex justify-between">
                            <div
                                className="circleContainer"
                                style={{ background: `conic-gradient(${getColor(movie.vote_average * 10)} 0% ${(movie.vote_average * 10) * 3.6}deg, lightgray ${(movie.vote_average * 10) * 3.6}deg 100%)`, width: "92px", height: "92px" }}
                            >
                                <div className="circle">
                                    <p className="font-[700] text-[28px] leading-[36px] text-center ">{Math.round(movie.vote_average * 10)}%</p>
                                </div>
                            </div>

                            <Heart className="w-[25px] h-[25px]" />
                        </div>

                        <div className='flex justify-center items-center gap-x-1 md:gap-x-2 '>
                            {movie.genres?.map((genreId: Genres) => (
                                <Link key={genreId.id} href={`/genre/${genreId.id}`}>
                                    <Badge variant="outline" className=' py-[8px] px-[16px] text-[#F1CB51] '>
                                        {genres.find((genre) => genre.id === genreId.id)?.name}
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-[#111] opacity-50" />
                <div className='absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent' />
            </div>
            <div className="mt-5 md:mt-10 mb-5">
                <Row title="Recommendations" data={recomendations} />
            </div>
        </main>
    )
}
