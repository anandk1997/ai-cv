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
    isSuccess,

    data,

    isError,
    error,
  } = useMutation({
    mutationFn: searchCV,
  });

  const {
    mutate: mutate1,

    isPending: isPending1,
    isSuccess: isSuccess1,

    isError: isError1,
    error: error1,
  } = useMutation({
    mutationFn: shortlistCV,
  });

  useToastLoading(isPending1);

  useMutationError(isError, error);
  useMutationError(isError1, error1);

  useEffect(() => {
    if (isSuccess1) toast.success("Cv Shortlisted");
  }, [isSuccess1]);

  useEffect(() => {
    mutate({
      search_query:
        "An entry-level professional with 1 year and 7 months of experience in hairdressing and customer service, with voluntary work experience. The candidate brings core skills in Hairdressing, Customer Service, and Voluntary Work Experience. Non-technical skills include Excellent Communication, Trustworthiness, Punctuality, Teamwork, Problem Solving, Using Initiative, Working Under Pressure, Enthusiasm, and Hard-Working. The candidate holds an NVQ Level 1 in Hair and Beauty Studies, City & Guilds certification, Level 2 in Performing Arts, and GCSE. This role is ideal for a dedicated individual eager to contribute to a dynamic team environment and committed to delivering high-quality service and support.",
    });
  }, []);

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
    isSuccess,
    data,
    mutate1,
  };
};
