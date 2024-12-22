
import Row from "@/components/ui/Row";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"

import { genres } from "@/constants/genres";
import { CalendarRangeIcon, Play } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import Percentage from "@/components/ui/Percentage";
import Favorite from "@/components/features/Favorite";
import { fetchMovieById, fetchRecommendations } from "@/services/movies";
import { Movie } from "@/types/movie";
import { Genres } from "@/types/genres";

type Props = {
    params: Promise<{ movieId: string }>;
}
export default async function MoviePage({ params }: Props) {
    const urlImage = 'https://image.tmdb.org/t/p/original'
    const movieId = (await params).movieId;

    const movie: Movie = await fetchMovieById(movieId)
    const recomendations = await fetchRecommendations(movieId)

    return (
        <main className="min-h-screen w-full h-full">
            <div
                className='relative h-full w-full p-5'
                style={{
                    backgroundImage: `url(${urlImage + movie.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>

                <div className="relative z-10 top-10 flex flex-col-reverse md:flex-row justify-center items-center w-full h-auto gap-8 md:gap-16 p-10 md:p-20">

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
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl overflow-x-auto no-scrollbar">
                            {`${movie.original_title}`}
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
                        <p className="h-[75px] text-xl text-gray-300 overflow-x-hidden overflow-y-auto no-scrollbar">
                            {movie.overview}
                        </p>

                        <div className="flex justify-between">
                            <Percentage
                                percentage={movie.vote_average}
                                width={92}
                                height={92}
                                text={28}
                                font={700}
                            />

                            <div className='flex justify-center items-center'>
                                <Favorite w={25} h={25} movieId={movie.id} />
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-center items-center gap-2 md:gap-2 '>
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
            <div className="m-5">
                <Row title="Recommendations" data={recomendations} />
            </div>
        </main>
    )
}
