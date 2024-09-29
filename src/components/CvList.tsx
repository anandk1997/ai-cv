import { ICandidateProfile } from "@/app/(main)/search-cv/page";
import { LoaderCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { TbChecklist } from "react-icons/tb";
import { Loader } from "./Loader";

const CvList = ({
  data,
  isShortlisting,
  onShortlist,
  loading
}: {
  data: ICandidateProfile[];
  isShortlisting: boolean;
  onShortlist: any;
  loading: boolean;
}) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <>
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
                  <span className="font-semibold">Professional Experience</span>
                </section>
              </div>

              <div className="flex gap-2 text-sm">
                <button
                  className="flex gap-1 items-center justify-center bg-[linear-gradient(104deg,_#0075FF_0%,_#0135FF_100%)] rounded-2xl w-[50%] py-2 text-white px-3"
                  disabled={isShortlisting}
                  onClick={() => {
                    onShortlist({
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
    </>
  );
};

export default CvList;
