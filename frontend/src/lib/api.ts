import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/v1", // Asegúrate de ajustar la URL base según tu configuración
});

export const fetchAuthRegister = async (name:string,email:string,password:string) => {
  try {
    const response = await api.post(`/auth/signup`, {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
}

export const fetchAuthLogin = async (email:string|undefined,password:string|undefined) => {
  try {
    const response = await api.post(`/auth/signin`, {
      email,
      password,
    });

    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
}

export const fetchNowPlaying = async () => {
  const response = await api.get(`/movies/now_playing`);
  return response.data;
};

export const fetchPopular = async () => {
  const response = await api.get(`/movies/popular`);
  return response.data;
};

export const fetchTopRated = async () => {
  const response = await api.get(`/movies/top_rated`);
  return response.data;
};

export const fetchUpcoming = async () => {
  const response = await api.get(`/movies/upcoming`);
  return response.data;
};

export const fetchMovieById = async (id: string) => {
  const response = await api.get(`/movies/movie/${id}`);
  return response.data;
};

export const fetchRecommendations = async (id: string) => {
  const response = await api.get(`/movies/recommendations/${id}`);
  return response.data;
};

export const fetchMovieByGenre = async (id: string, page: number) => {
  const response = await api.get(`/movies/genre/${id}`, {
    params: { page: page },
  });
  return response.data;
};

export const fetchSearchMovie = async (query: string) => {
  const response = await api.get(`/movies/search`, {
    params: { query },
  });
  return response.data;
};

export const fetchAddFavorite = async (userId: number, movieId: number) => {
  try {
    const response = await api.post(`/favorites/create`, {
      userId,
      movieId,
    });

    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

export interface Favorite {
  movieId: number;
}

export const fetchGetFavorites = async (userId: number | undefined) => {
  try {
    const response = await api.get(`/favorites/${userId}`);
    return response.data.map((favorite: Favorite) => favorite.movieId);
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

export const fetchRemoveFavorite = async (userId: number, movieId: number) => {
  try {
    const response = await api.delete(`/favorites/remove`, {
      data: { userId, movieId },
    });
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};
