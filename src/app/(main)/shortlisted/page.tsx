"use client";

import { Checkbox } from "@/components/ui/auth/checkbox";
import { getShortlistedCVs } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { GoDownload } from "react-icons/go";

const Shortlisted = () => {
  const { data: cvData } = useQuery({
    queryKey: ["shortlisted-cv"],
    queryFn: getShortlistedCVs,
  });

  return (
    <>
      <h1 className="pb-7 text-2xl font-semibold">Search History</h1>

      <div className="w-full rounded-md h-[calc(100%_-_80px)] overflow-auto p-6 whitespace-nowrap">
        {Array.from({ length: 20 }).map(() => (
          <div
            className="flex gap-4 align-middle items-center mb-3"
            key={Math.random()}
          >
            <Checkbox className="h-4 w-4 border-gray-400" />

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
                    UI UX Developer
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

                <div className="border-y-[5px] border-x-[4px] border-[#005dff] h-[11px] w-[13px] bg-white rounded-[3px]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shortlisted;
