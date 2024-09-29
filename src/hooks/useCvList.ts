import { useMutationError } from "@/hooks/useMutationError";
import { useToastLoading } from "@/hooks/useToastLoading";
import { searchCV, shortlistCV } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useCvList = () => {
  const {
    mutate,
    isPending,
    data,
    isError: isError1,
    error: error1,
  } = useMutation({
    mutationFn: searchCV,
  });

  const {
    mutate: mutate1,
    isPending: isPending1,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: shortlistCV,
  });

  useToastLoading(isPending1);

  useMutationError(isError, error);
  useMutationError(isError1, error1);

  useEffect(() => {
    if (isSuccess) toast.success("Cv Shortlisted");
  }, [isSuccess]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const search = formData.get("search");

    mutate({
      search_query: search!.toString(),
    });
  };

  return {
    handleSubmit,
    isPending,
    isPending1,
    data,
    mutate1,
  };
};
