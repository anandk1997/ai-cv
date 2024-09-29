"use client";

import CvList from "@/components/CvList";
import { useCvList } from "@/hooks/useCvList";
import { useMutationError } from "@/hooks/useMutationError";
import { searchCvHistoryDetails } from "@/lib/api/cv";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const SearchCVHistoryDetails = () => {
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

  const { isPending ,isPending1, mutate1 } = useCvList();

  useMutationError(isError2, error2);

  return (
    <>
      <h1 className="pb-7 text-2xl font-semibold">CV Search History</h1>

      <div className="flex flex-wrap justify-center gap-4 h-[calc(100%_-_82px)] overflow-auto">
        {isPending2 ? (
          <h1>Loading</h1>
        ) : (
          <CvList
            data={data2?.result}
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
