import axios from 'axios';

const api = process.env.BACKEND_MOVIES;

export const fetchNowPlaying = async () => {
    const response = await axios.get(`${api}/now_playing`);
    return response.data;
  };
  
  export const fetchPopular = async () => {
    const response = await axios.get(`${api}/popular`);
    return response.data;
  };
  
  export const fetchTopRated = async () => {
    const response = await axios.get(`${api}/top_rated`);
    return response.data;
  };
  
  export const fetchUpcoming = async () => {
    const response = await axios.get(`${api}/upcoming`);
    return response.data;
  };
  
  export const fetchMovieById = async (id: string) => {
    const response = await axios.get(`${api}/movie/${id}`);
    return response.data;
  };
  
  export const fetchRecommendations = async (id: string) => {
    const response = await axios.get(`${api}/recommendations/${id}`);
    return response.data;
  };
  
  export const fetchMovieByGenre = async (id: string, page: number) => {
    const response = await axios.get(`${api}/genre/${id}`, {
      params: { page },
    });
    return response.data;
  };
  
  export const fetchSearchMovie = async (query: string) => {
    const response = await axios.get(`${api}/search`, {
      params: { query },
    });
    return response.data;
  };