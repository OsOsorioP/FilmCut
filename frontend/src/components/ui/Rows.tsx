import Row from "@/components/ui/Row";
import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming } from "@/services/movies";

export default async function Rows() {
    try {
        const [nowPlaying, popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
            fetchNowPlaying(),
            fetchPopular(),
            fetchTopRated(),
            fetchUpcoming(),
        ]);

        return (
            <section className="flex flex-col gap-10 md:gap-20 p-6 md:p-12 h-full">
                <Row title="Popular" data={popularMovies} />
                <Row title="Now Playing" data={nowPlaying} />
                <Row title="Upcoming" data={upcomingMovies} />
                <Row title="Top Rated" data={topRatedMovies} />
                <Row title="Favorites" data={popularMovies} />
            </section>
        );
    } catch (error) {
        console.error("Error fetching movies:", error);
        return (
            <div className="text-center text-white">
                <p>Failed to load movies. Please try again later.</p>
            </div>
        );
    }
}
