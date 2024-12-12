import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming } from "@/lib/api";
import Row from "@/components/Row";

export default async function Rows() {

    const nowPlaying = await fetchNowPlaying();
    const popularMovies = await fetchPopular();
    const topRatedMovies = await fetchTopRated();
    const upcommingMovies = await fetchUpcoming();

  return (
    <div className="py-6 md:py-12 flex flex-col gap-y-10 md:gap-y-20 h-[100vh] overflow-y-auto no-scrollbar">
      <Row title="Popular" data={popularMovies}/>
      <Row title="Now Playing" data={nowPlaying}/>
      <Row title="Upcoming" data={upcommingMovies}/>
      <Row title="Top Rated" data={topRatedMovies}/>
      <Row title="Favorites" data={popularMovies}/>
    </div>
  )
}
