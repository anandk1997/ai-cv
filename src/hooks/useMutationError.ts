import { useEffect } from "react";
import toast from "react-hot-toast";

export const useMutationError = (isError: boolean, error: any) => {
  useEffect(() => {
    const axiosError = error as any;

    if (isError)
      toast.error(
        axiosError?.response?.data?.detail ||
          axiosError?.response?.data?.message ||
          axiosError?.response?.data?.error ||
          "An error occurred",
      );

    if (!!axiosError?.response?.data?.error) {
      toast.error(axiosError?.response?.data?.error);
    }
  }, [isError]);
};
