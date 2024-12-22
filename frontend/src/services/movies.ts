import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/v1/movies",
});

export const fetchNowPlaying = async () => {
  const response = await api.get("/now_playing");
  return response.data;
};

export const fetchPopular = async () => {
  const response = await api.get("/popular");
  return response.data;
};

export const fetchTopRated = async () => {
  const response = await api.get("/top_rated");
  return response.data;
};

export const fetchUpcoming = async () => {
  const response = await api.get("/upcoming");
  return response.data;
};

export const fetchMovieById = async (id: string) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const fetchRecommendations = async (id: string) => {
  const response = await api.get(`/recommendations/${id}`);
  return response.data;
};

export const fetchMovieByGenre = async (id: string, page: number) => {
  const response = await api.get(`/genre/${id}`, {
    params: { page: page },
  });
  return response.data;
};

export const fetchSearchMovie = async (query: string) => {
  const response = await api.get("/search", {
    params: { query },
  });
  return response.data;
};
