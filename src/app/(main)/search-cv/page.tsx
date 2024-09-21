import React from "react";
import { IoMdMail } from "react-icons/io";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { TbChecklist } from "react-icons/tb";

const SearchCV = () => {
  return (
    <>
      <h1 className="pb-7 text-2xl font-semibold">CV's Based on Search</h1>

      <div className="flex flex-wrap justify-center gap-4 h-[calc(100%_-_80px)] overflow-auto">
        {Array.from({ length: 20 }).map(() => (
          <div className="bg-white rounded-3xl w-72 pt-5 px-2 pb-2">
            <div className="ps-3">
              <h2 className="text-xl font-semibold">John Doe</h2>

              <span className="text-gray-400">UI UX Developer</span>

              <div className="flex items-center gap-2 py-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="text-gray-400 text-xs">
                  Last Active: 3 hours ago
                </span>
              </div>

              <div className="flex items-center gap-2">
                <IoMdMail />
                <span>username@example.com</span>
              </div>

              <div className="flex items-center gap-2 pb-2">
                <IoMdMail />
                <span>+1 982 839 3872</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-4 w-7 rounded-full bg-blue-500" />
                <span className="font-semibold">About</span>
              </div>

              <span className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                provident dicta blanditiis, quisquam perferendis ipsa.
              </span>

              <div className="flex items-center gap-2 py-3">
                <span className="h-3 w-6 rounded-full bg-blue-500" />
                <span className="font-semibold">Skills</span>
              </div>
            </div>

            <div className="flex gap-2 text-sm">
              <button className="flex gap-1 items-center justify-center bg-[linear-gradient(104deg,_#0075FF_0%,_#0135FF_100%)] rounded-2xl w-[50%] py-2 text-white px-3">
                <TbChecklist />
                Shortlisted
              </button>

              <button className="flex gap-1 items-center justify-center bg-[linear-gradient(104deg,_#0075FF_0%,_#0135FF_100%)] rounded-2xl w-[50%] py-2 text-white px-3">
                <PiDownloadSimpleLight size={25} />

                <span>Download for 20 credits</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchCV;
