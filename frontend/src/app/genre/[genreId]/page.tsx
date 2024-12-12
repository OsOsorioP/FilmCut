import { fetchMovieByGenre } from "@/actions/actions";
import LoadMore from "@/components/LoadMore";
import MovieCard from "@/components/MovieCard";
import { genres } from "@/constants/genres";

type Props = {
    params: {
        genreId: string;
    }
}

export default async function GenrePage({ params }: Props) {
    const genreId = params.genreId
    const movies = await fetchMovieByGenre(genreId,1)

    return (
        <div className="p-12 pt-24 md:pt-32">
            <h2 className="text-2xl md:text-5xl max-w-md font-semibold text-white">
                {genres.find((genre) => genre.id === parseInt(genreId))?.name} Movies
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {movies && movies.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <LoadMore id={genreId} />
        </div>
    )
}
