"use client";

import { useMutationError } from "@/hooks/useMutationError";
import { useToastLoading } from "@/hooks/useToastLoading";
import { searchCV, shortlistCV } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { TbChecklist } from "react-icons/tb";

const SearchCV = () => {
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

  return (
    <>
      <h1 className="pb-7 text-2xl font-semibold">CV's Based on Search</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 my-5">
          <input
            type="search"
            placeholder="Search CV..."
            className="px-4 pb-16 pt-5 rounded-xl w-[70%]"
            name="search"
            required
          />

          <button
            className="bg-[linear-gradient(180deg,_#0075FF_0%,_#0135FF_100%)] text-white px-10 py-2 rounded-lg text-sm h-12"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-4 h-[calc(100%_-_217px)] overflow-auto">
        {!!!data?.length ? (
          <h1>No data found</h1>
        ) : (
          data?.map((item: ICandidateProfile, i: number) => (
            <Link href={``} key={Math.random()}>
              <div className="bg-white rounded-3xl w-72 pt-5 px-2 pb-2 cursor-pointer">
                <div className="ps-3">
                  <h2 className="text-xl font-semibold">John Doe</h2>
                  <span className="text-gray-400">{item?.role}</span>
                  <div className="flex items-center gap-2 py-2">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="text-gray-400 text-xs">
                      Last Active: 3 hours ago
                    </span>
                  </div>

                  <section>
                    <div className="flex items-center gap-2 ">
                      <IoMdMail className="text-[#005dff]" />
                      <span>{item?.email}</span>
                    </div>

                    <div className="flex items-center gap-2 pb-2">
                      <FiPhoneCall className="text-[#005dff]" />
                      <span>+1 982 839 3872</span>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-7 rounded-full bg-blue-500" />
                      <span className="font-semibold">About</span>
                    </div>

                    <span className="text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis provident dicta blanditiis, quisquam perferendis
                      ipsa.
                    </span>
                  </section>

                  <section className="flex items-center gap-2 py-3">
                    <span className="h-3 w-6 rounded-full bg-blue-500" />
                    <span className="font-semibold">Skills</span>
                  </section>

                  <section className="flex items-center gap-2 py-3">
                    <span className="h-3 w-6 rounded-full bg-blue-500" />
                    <span className="font-semibold">
                      Professional Experience
                    </span>
                  </section>
                </div>

                <div className="flex gap-2 text-sm">
                  <button
                    className="flex gap-1 items-center justify-center bg-[linear-gradient(104deg,_#0075FF_0%,_#0135FF_100%)] rounded-2xl w-[50%] py-2 text-white px-3"
                    disabled={isPending1}
                    onClick={() => {
                      mutate1({
                        candiate_email: item?.email,
                        shortlisted_data: item,
                      });
                    }}
                  >
                    <TbChecklist />
                    Shortlisted
                  </button>

                  <button className="flex gap-1 items-center justify-center bg-[linear-gradient(104deg,_#0075FF_0%,_#0135FF_100%)] rounded-2xl w-[50%] py-2 text-white px-3">
                    <PiDownloadSimpleLight size={25} />

                    <span>Download for 20 credits</span>
                  </button>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default SearchCV;

interface Education {
  degree: string;
  major: string;
}

export interface ICandidateProfile {
  certifications: string;
  city: string;
  core_skills: string[];
  country: string;
  education: Education[];
  email: string;
  industry: string[];
  languages: string;
  non_technical_skills: string[];
  role: string;
  role_experience_in_months: number;
  technical_skills: string;
  total_experience_in_months: number;
  total_experience_in_years: number;
}
