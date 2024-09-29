"use client";

import { Checkbox } from "@/components/ui/auth/checkbox";
import { getShortlistedCVs, unShortlistCV } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect } from "react";
import { GoDownload } from "react-icons/go";
import { ICandidateProfile } from "../search-cv/page";
import { useMutationError } from "@/hooks/useMutationError";
import toast from "react-hot-toast";
import { useToastLoading } from "@/hooks/useToastLoading";

const Shortlisted = () => {
  const queryClient = useQueryClient();

  const {
    data: cvData,
    isPending: isLoading,
    isError: isError1,
    error: error1,
  } = useQuery({
    queryKey: ["shortlisted-cv"],
    queryFn: getShortlistedCVs,
  });

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: unShortlistCV,
  });

  useToastLoading(isPending);

  useEffect(() => {
    if (isSuccess) {
      queryClient.refetchQueries({ queryKey: ["shortlisted-cv"] });

      toast.success("CV marked as rejected");
    }
  }, [isSuccess]);

  useMutationError(isError, error);
  useMutationError(isError1, error1);

  return (
    <>
      <h1 className="pb-7 text-2xl font-semibold">Shortlisted CV's</h1>

      <div className="w-full rounded-md h-[calc(100%_-_80px)] overflow-auto p-6 whitespace-nowrap">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : !!!cvData?.length ? (
          <h1>No data found</h1>
        ) : (
          cvData?.map((item: IShortlisted) => (
            <div
              className="flex gap-4 align-middle items-center mb-3"
              key={Math.random()}
            >
              {/* <Checkbox className="h-4 w-4 border-gray-400" /> */}

              <div className="flex gap-4 align-middle items-center">
                <div className="flex items-center gap-3 bg-white px-7 min-h-16 max-h-40 rounded-xl">
                  <Image
                    src="https://picsum.photos/id/237/200/300"
                    height={10}
                    width={10}
                    alt=""
                    className="h-10 w-10 rounded-xl"
                  />

                  <div className="flex flex-col">
                    <h2 className="font-semibold text-lg">John Doe</h2>

                    <span className="text-gray-400 text-[11px]">
                      {item?.shortlisted_data?.email}
                    </span>
                  </div>

                  <span className="text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laboriosam deleniti laborum quis consequuntur ut
                  </span>

                  <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                      <span className="h-3 w-5 rounded-full bg-blue-500" />
                      <span className="font-semibold">Skills</span>
                    </div>
                  </div>

                  <button className="flex justify-center items-center gap-2 rounded-xl font-light bg-[linear-gradient(100deg,_#0075FF_0%,_#0135FF_100%)] text-white h-12 w-56 text-sm">
                    <GoDownload />
                    <span>Download for credits</span>
                  </button>

                  <button
                    className="border-y-[5px] border-x-[4px] border-[#005dff] h-[11px] w-[13px] bg-white rounded-[3px]"
                    disabled={isPending}
                    onClick={() => {
                      mutate(item?.id);
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Shortlisted;

interface IShortlisted {
  candiate_email: string;
  created_at: string;
  id: number;
  shortlisted_data: ICandidateProfile;
  updated_at: string;
  user: number;
}
