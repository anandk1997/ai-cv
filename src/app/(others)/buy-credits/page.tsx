'use client'


import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { useRouter } from 'next/navigation'



const BuyCredits = () => {
  const router = useRouter()



  return (
    <>
      <div className="flex flex-col justify-center align-middle items-center gap-14 h-[100vh] w-full bg-[hsl(216deg_40.54%_92.75%)]">
        <div className="flex flex-col gap-4">
          <h1 className="text-center font-semibold text-5xl">Buy Credits</h1>
          <span className="text-center text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>

          <div className="flex gap-3 justify-center items-center">
            <span>Bill Monthly</span>

            <Switch className="data-[state=checked]:bg-[#005DFF]" />

            <span>Bill Yearly</span>
          </div>
        </div>

        <div className="bg-white flex flex-col justify-center align-middle items-center px-4 py-12 w-[90%] md:w-[50%] lg:w-[40%] rounded-md">
          <h1 className="text-4xl text-center">
            Enter the amount of credits you want to purchase
          </h1>

          <input
            type="number"
            className="rounded-md shadow-lg my-8 w-[60%] h-14 border border-gray-200 text-center"
            placeholder="Enter credits"
          />

          <h2 className="text-xl">Calculated Price</h2>

          <div className="font-bold text-4xl">$45</div>

          <button onClick={() => router.push('/payment-methods')} className="bg-[linear-gradient(93deg,_#0075FF_0%,_#0135FF_100%)] text-white px-10 py-4 rounded-lg mt-8 w-[50%]">
            Buy now
          </button>
          
        </div>
      </div>
    </>
  );
};

export default BuyCredits;
