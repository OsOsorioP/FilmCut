"use client"
import { useEffect, useState } from "react";
import Row from "@/components/ui/Row";
import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming } from "@/services/movies";

export default function Rows() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      const results = await Promise.allSettled([
        fetchNowPlaying(),
        fetchPopular(),
        fetchTopRated(),
        fetchUpcoming(),
      ]);

      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          switch (index) {
            case 0:
              setNowPlaying(result.value);
              break;
            case 1:
              setPopularMovies(result.value);
              break;
            case 2:
              setTopRatedMovies(result.value);
              break;
            case 3:
              setUpcomingMovies(result.value);
              break;
            default:
              break;
          }
        } else {
          setError("Some movies failed to load.");
        }
      });
    };

    loadMovies();
  }, []);

  if (error) {
    return (
      <div className="text-center text-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-10 md:gap-20 p-6 md:p-12 h-full">
      <Row title="Popular" data={popularMovies} />
      <Row title="Now Playing" data={nowPlaying} />
      <Row title="Upcoming" data={upcomingMovies} />
      <Row title="Top Rated" data={topRatedMovies} />
      <Row title="Favorites" data={popularMovies} />
    </section>
  );
}
