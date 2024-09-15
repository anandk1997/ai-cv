import React from "react";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col md:flex-row justify-between h-[100vh] w-[100%] bg-blue-100">
      <div className="flex flex-col justify-center items-center align-middle gap-12 content-center w-[50%]">
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
