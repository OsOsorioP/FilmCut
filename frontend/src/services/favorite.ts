import { ErrorResponse } from "@/types/error";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/v1/favorite",
});

export const fetchAddFavorite = async (userId: number, movieId: number) => {
  try {
    const response = await api.post("/create", {
      userId,
      movieId,
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

export interface Favorite {
  movieId: number;
}

export const fetchGetFavorites = async (userId: number | undefined) => {
  try {
    const response = await api.get(`/${userId}`);
    return response.data.map((favorite: Favorite) => favorite.movieId);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export const fetchRemoveFavorite = async (userId: number, movieId: number) => {
  try {
    const response = await api.delete("/remove", {
      data: { userId, movieId },
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
