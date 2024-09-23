import { env } from "@/lib/env/intex";
import axios, { AxiosResponse } from "axios";

export const API = axios.create({
  baseURL: env.API_URL,
  timeout: 10000,
});

const getTokenFromCookies = async () => {
  const { data } = await axios.get("/api/token");
  return data?.data?.access;
};

API.interceptors.request.use(
  async (config: any) => {
    const token = await getTokenFromCookies();

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  },
);
