"use client";

import CvList from "@/components/CvList";
import { useCvList } from "@/hooks/useCvList";
import { useRouter } from "next/navigation";
import React from "react";

const SearchCV = () => {
  const router = useRouter();

  const { handleSubmit, isPending, isPending1, data, mutate1 } = useCvList();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 my-5">
          <textarea
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

      <h1 className="pb-7 text-2xl font-semibold">CV's Based on Search</h1>

      <div className="flex flex-wrap gap-4 h-[calc(100%_-_244px)] overflow-auto">
        <CvList
          data={data}
          onCvDetails={(i: number) => router.push(`search-cv/${i}`)}
          isShortlisting={isPending1}
          onShortlist={mutate1}
          loading={isPending}
        />
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
