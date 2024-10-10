"use client";

import CvList from "@/components/CvList";
import { Loader } from "@/components/Loader";
import { useCvList } from "@/hooks/useCvList";
import { useMutationError } from "@/hooks/useMutationError";
import { searchCvHistoryDetails } from "@/lib/api/cv";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoListCircleOutline } from "react-icons/io5";

const SearchCVHistoryDetails = () => {
  const router = useRouter();
  const { id } = useParams();

  const {
    data: data2,
    isPending: isPending2,
    isError: isError2,
    error: error2,
  } = useQuery({
    queryKey: ["search-history-details"],
    queryFn: () => searchCvHistoryDetails(id?.toString()),
  });

  const { isPending, isPending1, mutate1 } = useCvList();

  useMutationError(isError2, error2);

  return (
    <>
      <h1 className="pb-7 text-2xl font-semibold">History Result</h1>

      {data2?.search_query && (
        <div className="flex items-center gap-4 w-full mb-5">
          <div className="rounded-xl text-gray-500 flex items-center gap-4 bg-white px-5 py-3 w-[80%]">
            <IoIosSearch size={30} />

            <div>{data2?.search_query?.substring(0, 200)} ...</div>
          </div>

          <Link
            href="/search-history"
            className="bg-[linear-gradient(104deg,_#0075FF_0%,_#0135FF_100%)] text-sm h-10 rounded-lg text-white flex justify-center items-center gap-2 py-3 px-5"
          >
            <IoListCircleOutline />
            <span>Edit Search</span>
          </Link>
        </div>
      )}

      <div className="flex flex-wrap gap-4 h-[calc(100%_-_165px)] overflow-auto">
        {isPending2 ? (
          <Loader />
        ) : (
          <CvList
            data={data2?.result}
            onCvDetails={(i: number) => router.push(`${id}/${i}`)}
            isShortlisting={isPending1}
            onShortlist={mutate1}
            loading={isPending}
          />
        )}
      </div>
    </>
  );
};

export default SearchCVHistoryDetails;
