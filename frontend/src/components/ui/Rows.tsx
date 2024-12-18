import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming } from "@/lib/api";
import Row from "@/components/ui/Row";

export default async function Rows() {

    const nowPlaying = await fetchNowPlaying();
    const popularMovies = await fetchPopular();
    const topRatedMovies = await fetchTopRated();
    const upcommingMovies = await fetchUpcoming();

  return (
    <section className="flex flex-col gap-10 md:gap-20 p-6 md:p-12 h-full">
      <Row title="Popular" data={popularMovies}/>
      <Row title="Now Playing" data={nowPlaying}/>
      <Row title="Upcoming" data={upcommingMovies}/>
      <Row title="Top Rated" data={topRatedMovies}/>
      <Row title="Favorites" data={popularMovies}/>
    </section>
  )
}
