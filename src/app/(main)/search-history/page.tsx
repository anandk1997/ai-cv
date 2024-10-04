"use client";

import { Loader } from "@/components/Loader";
import { useMutationError } from "@/hooks/useMutationError";
import { useToastLoading } from "@/hooks/useToastLoading";
import { deleteSearchHistory, searchCvHistory } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SearchHistory = () => {
  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["search-history"],
    queryFn: searchCvHistory,
  });

  const {
    mutate,
    isPending: isLoading,
    isError: isError1,
    error: error1,
    isSuccess,
  } = useMutation({
    mutationFn: deleteSearchHistory,
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.refetchQueries({ queryKey: ["search-history"] });

      toast.success("CV deleted successfully");
    }
  }, [isSuccess]);

  useToastLoading(isLoading);
  useMutationError(isError, error);
  useMutationError(isError1, error1);

  return (
    <>
      <h1 className="pb-7 text-2xl font-semibold">Search History</h1>

      <div className="w-full rounded-md h-[calc(100%_-_80px)] overflow-auto p-6">
        {isPending ? (
          <Loader />
        ) : !!!data?.length ? (
          <h1>No data found</h1>
        ) : (
          data?.map((item: any) => (
            <div
              className="flex gap-4 align-middle items-center mb-3"
              key={Math.random()}
            >
              {/* <Checkbox className="h-4 w-4 border-gray-400" /> */}

              <div className="flex gap-4 align-middle items-center w-full">
                <div className="flex items-center gap-3 bg-white px-7 py-4 min-h-16 max-h-40 overflow-auto w-[80%] rounded-xl">
                  <Search size={20} strokeWidth={0.5} />

                  <span className="text-gray-400">{item?.search_query}</span>
                </div>

                <Link
                  href={`/search-history/${item?.id}`}
                  className="rounded-lg bg-[linear-gradient(100deg,_#0075FF_0%,_#0135FF_100%)] text-white h-12 w-[20%] text-sm flex justify-center items-center"
                >
                  See Results
                </Link>

                <button
                  className="border-y-[5px] border-x-[4px] border-[#005dff] h-[11px] w-[13px] bg-white rounded-[3px]"
                  disabled={isPending}
                  onClick={() => {
                    mutate(item?.id);
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default SearchHistory;
