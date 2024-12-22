import { ErrorResponse } from "@/types/error";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/v1/auth",
});

export const fetchAuthRegister = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await api.post("/signup", {
      name,
      email,
      password,
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

export const fetchAuthLogin = async (
  email: string | undefined,
  password: string | undefined
) => {
  try {
    const response = await api.post("/signin", {
      email,
      password,
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
