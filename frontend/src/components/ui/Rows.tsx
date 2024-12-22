"use client"
import Row from "@/components/ui/Row";
import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming } from "@/services/movies";
import { useEffect, useState } from "react";

export default function Rows() {
  const [popularMovies, setPopularMovies] = useState()
  const [nowPlaying, setNowPlaying] = useState()
  const [upcommingMovies, setUpcommingMovies] = useState()
  const [topRatedMovies, setTopRatedMovies] = useState()

  useEffect(() => {
    const loadMovies = async () => {
      setNowPlaying(await fetchNowPlaying())
      setPopularMovies(await fetchPopular())
      setTopRatedMovies(await fetchTopRated())
      setUpcommingMovies(await fetchUpcoming())
    }
    loadMovies()
  }, [])

  return (
    <section className="flex flex-col gap-10 md:gap-20 p-6 md:p-12 h-full">
      <Row title="Popular" data={popularMovies} />
      <Row title="Now Playing" data={nowPlaying} />
      <Row title="Upcoming" data={upcommingMovies} />
      <Row title="Top Rated" data={topRatedMovies} />
      <Row title="Favorites" data={popularMovies} />
    </section>
  )
}
