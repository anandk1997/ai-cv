"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { BsStripe } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { useRouter } from 'next/navigation'


const PaymentMethods = () => {
  const [selected, setSelected] = useState("");
  const router = useRouter()


  return (
    <>
      <div className="flex justify-center align-middle items-center gap-14 h-[100vh] w-full bg-[hsl(216deg_40.54%_92.75%)]">
        <div className="bg-white py-10 w-[90%] md:w-[50%] lg:w-[40%] rounded-lg">
          <div className="flex justify-between px-5 pb-2">
            <div className="">
              <h1 className="text-2xl">Choose your payment</h1>

              <span className="text-gray-400 mt-2">
                Choose payment option for continue the next step
              </span>
            </div>

            <button className="rounded-full h-10 w-10 bg-[#ECEDF2] flex justify-center align-middle items-center">
              X
            </button>
          </div>

          <div className="flex gap-3 px-5 py-4 border-t border-b">
            <div
              className={cn(
                "flex flex-col justify-center items-center gap-3 flex-1 h-56 rounded-xl border cursor-pointer",

                selected === "card"
                  ? "bg-[hsl(217.5deg_100%_96.86%)] border-[#2257EE] text-[#2257EE]"
                  : "border-gray-200",
              )}
              onClick={() => setSelected("card")}
            >
              <FaRegCreditCard size={70} />

              <span className="font-semibold">Credit Card</span>
            </div>

            <div
              className={cn(
                "flex flex-col justify-center items-center gap-3 flex-1 h-56 rounded-xl border cursor-pointer",

                selected === "stripe"
                  ? "bg-[hsl(217.5deg_100%_96.86%)] border-[#2257EE] text-[#2257EE]"
                  : "border-gray-200",
              )}
              onClick={() => setSelected("stripe")}
            >
              <BsStripe size={70} />

              <span className="font-semibold">Stripe</span>
            </div>
          </div>

          <div className="flex gap-3 justify-end px-5">
            <button className="font-semibold border px-10 py-4 rounded-lg mt-8">
              Cancel
            </button>

            <button
              onClick={() => router.push('/transaction-detail')}
              className="bg-[linear-gradient(93deg,_#0075FF_0%,_#0135FF_100%)] text-white px-10 py-4 rounded-lg mt-8"
              disabled={!selected}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
