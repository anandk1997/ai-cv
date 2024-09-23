import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetToken = () => {
  const { data: session } = useGetSession();

  const token = session?.access;

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const useGetSession = () => {
  const getSession = async () => {
    try {
      const { data } = await axios.get("/api/token");

      return data?.data;
    } catch (error) {
      console.error("error getting session", error);
    }
  };

  return useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
};
