"use client";

import { CvDetails } from "@/components/CVDetails";
import { Loader } from "@/components/Loader";
import { useMutationError } from "@/hooks/useMutationError";
import { searchCvHistoryDetails } from "@/lib/api/cv";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CvInfo = () => {
  const { cvid } = useParams();
  const { id } = useParams();

  const [cvData, setCvData] = useState(null);

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

    const data = data2?.result?.find((_: any, i: number) => i === Number(cvid));
    setCvData(data);
  }, [isSuccess]);

  return isPending2 ? <Loader /> : <CvDetails data={cvData!} />;
};

export default CvInfo;
