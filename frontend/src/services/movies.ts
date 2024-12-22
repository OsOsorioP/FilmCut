import { ErrorResponse } from "@/types/error";
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/movies`,
});


export const fetchNowPlaying = async () => {
  try {
    const response = await api.get("/now_playing");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export const fetchPopular = async () => {
  try {
    const response = await api.get("/popular");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export const fetchTopRated = async () => {
  try {
    const response = await api.get("/top_rated");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export const fetchUpcoming = async () => {
  try {
    const response = await api.get("/upcoming");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export const fetchMovieById = async (id: string) => {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export const fetchRecommendations = async (id: string) => {
  try {
    const response = await api.get(`/recommendations/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export const fetchMovieByGenre = async (id: string, page: number) => {
  try {
    const response = await api.get(`/genre/${id}`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export const fetchSearchMovie = async (query: string) => {
  try {
    const response = await api.get("/search", {
      params: { query },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    } else {
      throw new Error((error as Error).message);
    }
  }
};
