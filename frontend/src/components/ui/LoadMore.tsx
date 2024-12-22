"use client"
import { useInView } from "react-intersection-observer";

import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";

import MovieCard from "@/components/ui/MovieCard";
import { fetchMovieByGenre } from "@/services/movies";
import { Movie } from "@/types/movie";

let page = 2;

export default function LoadMore({ id }: { id: string }) {

    const { ref, inView } = useInView()
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        if (inView) {
            fetchMovieByGenre(id, page).then((res) => {
                setMovies([...movies, ...res])
                page++
            })
        }
    }, [inView, id])

    return (
        <>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {movies && movies.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <section className="flex p-8 justify-center items-center w-full">
                <div ref={ref}>
                    <Loader2Icon className="size-14 text-gray-300 animate-spin" />
                </div>
            </section>
        </>
    )
}
