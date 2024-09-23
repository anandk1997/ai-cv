"use client";

import { Checkbox } from "@/components/ui/auth/checkbox";
import { Search } from "lucide-react";

const SearchHistory = () => {
  return (
    <>
      <h1 className="pb-7 text-2xl font-semibold">Search History</h1>

      <div className="w-full rounded-md h-[calc(100%_-_80px)] overflow-auto p-6">
        {Array.from({ length: 20 }).map(() => (
          <div className="flex gap-4 align-middle items-center mb-3">
            <Checkbox className="h-4 w-4 border-gray-400" />

            <div className="flex gap-4 align-middle items-center">
              <div className="flex items-center gap-3 bg-white px-7 min-h-16 max-h-40 rounded-xl">
                <Search size={20} strokeWidth={0.5} />

                <span className="text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam deleniti laborum quis consequuntur ut
                </span>
              </div>

              <button className="rounded-lg bg-blue-600 text-white h-12 w-56 text-sm">
                See Results
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchHistory;
