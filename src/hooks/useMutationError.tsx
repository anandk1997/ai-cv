import React, { useEffect } from "react";
import toast from "react-hot-toast";

export const useMutationError = (isError: any, error: any) => {
  useEffect(() => {
    const axiosError = error as any;

    if (isError)
      toast.error(axiosError?.response?.data?.detail || "An error occurred");
  }, [isError]);
};
