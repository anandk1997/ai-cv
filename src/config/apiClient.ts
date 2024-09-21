import { env } from "@/lib/env/intex";
import axios, { AxiosResponse } from "axios";
import cookie from "cookie";

export const API = axios.create({
  baseURL: env.API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getTokenFromCookies = (req?: any) => {
  if (req && req.headers && req.headers.cookie) {
    const cookies = cookie.parse(req.headers.cookie);
    return cookies.token;
  }
  const cookies = cookie.parse(document.cookie);

  return cookies.token;
};

API.interceptors.request.use(
  (config: any) => {
    const token = getTokenFromCookies();
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
