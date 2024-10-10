"use client";

import { CvDetails, IResume } from "@/components/CVDetails";
import { Loader } from "@/components/Loader";
import { useCvList } from "@/hooks/useCvList";
import { useMutationError } from "@/hooks/useMutationError";
import { searchCvHistoryDetails } from "@/lib/api/cv";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CvInfo = () => {
  const { cvid } = useParams();
  const { id } = useParams();

  const [cvData, setCvData] = useState<IResume>();

  const { mutate1, isPending, isPending1 } = useCvList();

  const {
    data: data2,
    isPending: isPending2,
    isError: isError2,
    error: error2,
    isSuccess,
  } = useQuery({
    queryKey: ["search-history-details"],
    queryFn: () => searchCvHistoryDetails(id?.toString()),
  });

  useMutationError(isError2, error2);

  useEffect(() => {
    if (!isSuccess) return;

    const data = data2?.result?.find(
      (_: IResume, i: number) => i === Number(cvid),
    );
    setCvData(data);
  }, [isSuccess]);

  return isPending2 ? (
    <Loader />
  ) : (
    <CvDetails
      data={cvData!}
      onShortlist={() =>
        mutate1({
          candiate_email: cvData?.email!,
          shortlisted_data: cvData,
        })
      }
      isShortlisting={isPending || isPending1}
    />
  );
};

export default CvInfo;
