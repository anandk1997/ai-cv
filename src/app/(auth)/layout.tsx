import React from "react";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";
import AICV from "@/images/ai-cv1.png";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col md:flex-row justify-between h-[100vh] w-[100%] bg-[hsl(212deg_100%_97.06%)]">
      <div className="flex flex-col justify-center items-center align-middle gap-12 content-center w-[50%]">
        <div className="flex items-center gap-2 ps-7 py-3 text-[#005dff] font-bold text-2xl">
          <Image src={AICV} height={65} width={65} alt="" />

          <span className="">AI CV</span>
        </div>

        <h1 className="font-semibold text-5xl">
          <div className="">One tool for your</div>
          <div className="">whole team needs</div>
        </h1>
        <div className="flex justify-center align-middle items-center gap-8">
          <AnimatedTooltip />

          <span className="font-semibold">
            3k+ people joined us, now it's your turn
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center align-middle gap-12 content-center w-[50%]">
        <div className=" m-h-full w-[60%] bg-white px-10 py-16 rounded-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
