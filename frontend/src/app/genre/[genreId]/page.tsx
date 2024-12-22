import LoadMore from "@/components/ui/LoadMore";
import MovieCard from "@/components/ui/MovieCard";
import { genres } from "@/constants/genres";
import { fetchMovieByGenre } from "@/services/movies";
import { Movie } from "@/types/movie";

interface Props {
    params: Promise<{ genreId: string }>;
}

export default async function GenrePage({ params }: Props) {

    const genreId = (await params).genreId;
    const movies = await fetchMovieByGenre(genreId, 1)


    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-full p-[20px]">
            <h2 className="text-2xl md:text-5xl w-full font-semibold text-white">
                {genres.find((genre) => genre.id === parseInt(genreId))?.name} Movies
            </h2>

            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center align-middle content-center items-center">
                {movies && movies.map((movie: Movie) => (
                    <div key={movie.id} className="flex justify-center items-center">
                        <MovieCard movie={movie} />
                    </div>

                ))}
            </div>

            <LoadMore id={genreId} />
        </div>
    )
}
