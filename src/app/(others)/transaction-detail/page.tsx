"use client";

import { Checkbox } from "@/components/ui/auth/checkbox";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";

const TransactionDetails = () => {
  const months = Array.from({ length: 12 }, (_, i) => (
    <option key={i} value={String(i + 1).padStart(2, "0")}>
      {String(i + 1).padStart(2, "0")}
    </option>
  ));

  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const years = Array.from({ length: 10 }, (_, i) => (
    <option key={i} value={currentYear + i}>
      {currentYear + i}
    </option>
  ));

  return (
    <>
      <div className="flex justify-center align-middle items-center gap-14 h-[100vh] w-full bg-[hsl(216deg_40.54%_92.75%)]">
        <div className="bg-white py-10 w-[90%] md:w-[50%] lg:w-[40%] rounded-xl">
          <div className="flex justify-between px-5 pb-2">
            <div className="">
              <h1 className="text-2xl">Payment transaction details</h1>

              <span className="text-gray-400 mt-2">
                We automatically bill on 1st of each month
              </span>
            </div>

            <button className="rounded-full h-10 w-10 bg-[#ECEDF2] flex justify-center align-middle items-center">
              X
            </button>
          </div>

          <div className="px-5 py-4 border-t border-b">
            <div className="flex justify-between items-center p-2 rounded-xl border border-[#2257EE]">
              <div className="flex gap-2 items-center">
                <div className="">
                  <TbTriangleInvertedFilled
                    size={30}
                    className="text-[#2257EE]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3>Professional Plan</h3>

                  <span className="text-gray-400 text-xs">
                    Get 500 credits a month
                  </span>

                  <button className="text-xs text-[#2257EE] underline flex">
                    Edit Plan
                  </button>
                </div>
              </div>

              <div className="">$49.00</div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-3 mt-8">
              <div className="flex flex-col flex-1 gap-1">
                <label htmlFor="" className="text-xs text-[#2257EE]">
                  Full Name Card
                </label>

                <input
                  name="first_name"
                  className="h-9 border border-gray-200 rounded-md w-full px-4"
                />
              </div>

              <div className="flex flex-col flex-1 gap-1">
                <label htmlFor="" className="text-xs text-[#2257EE]">
                  Expired
                </label>

                <div className="flex gap-2">
                  <select className="flex-1 h-9 border border-gray-200 rounded-md px-4">
                    <option value="">Select Month</option>
                    {months}
                  </select>

                  <select className="flex-1 h-9 border border-gray-200 rounded-md px-4">
                    <option value="">Select Year</option>
                    {years}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-3 mt-3">
              <div className="flex flex-col flex-1 gap-1">
                <label htmlFor="" className="text-xs text-[#2257EE]">
                  Card Number
                </label>

                <input
                  name="first_name"
                  className="h-9 border border-gray-200 rounded-md w-full px-4"
                />
              </div>

              <div className="flex flex-col flex-1 gap-1">
                <label htmlFor="" className="text-xs text-[#2257EE]">
                  CVV
                </label>

                <input
                  type="password"
                  name="first_name"
                  className="h-9 border border-gray-200 rounded-md w-full px-4"
                />
              </div>
            </div>

            <label className="flex gap-3 items-center mt-5 border border-gray-200 rounded-md h-10 px-3">
              <Checkbox required name="bank" />

              <span className="text-gray-500 text-[10px]">
                Save your Bank Account
              </span>
            </label>

            <div className="flex flex-col flex-1 gap-1 mt-5">
              <label htmlFor="" className="text-xs text-gray-500">
                Email Address
              </label>

              <input
                name="email"
                className="h-9 border border-gray-200 rounded-md w-full px-4"
              />
            </div>

            <div className="flex justify-center text-[#2257EE] text-center rounded-xl bg-[#EFF5FF] text-sm mt-5 w-[80%] mx-auto px-6 py-3">
              Will sent invoice for your email. You can see it after the
              transaction is successful
            </div>
          </div>

          <div className="flex gap-3 justify-end px-5">
            <button className="font-semibold border px-10 py-4 rounded-lg mt-8">
              Cancel
            </button>

            <button
              onClick={() => router.push("/payment-successfull")}
              className="bg-[linear-gradient(93deg,_#0075FF_0%,_#0135FF_100%)] text-white px-10 py-4 rounded-lg mt-8"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetails;
