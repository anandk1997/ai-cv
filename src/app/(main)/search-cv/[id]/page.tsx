"use client";

import { CvDetails, IResume } from "@/components/CVDetails";
import { Loader } from "@/components/Loader";
import { useCvList } from "@/hooks/useCvList";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CVDetails = () => {
  const { id } = useParams();

  const [cvData, setCvData] = useState<IResume>();

  const { isPending, isPending1, isSuccess, data, mutate1 } = useCvList();

  useEffect(() => {
    if (!isSuccess) return;

    const datas = data?.find((_: IResume, i: number) => i === Number(id));
    setCvData(datas);
  }, [isSuccess]);

  return isPending ? (
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

export default CVDetails;
