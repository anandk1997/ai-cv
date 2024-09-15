import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex justify-between h-[100vh] w-[100%]">
        <div className="flex flex-col justify-center items-center align-middle gap-12 content-center w-[50%]">
          <h1 className="font-bold text-5xl">
            <div className="">One tool for your</div>
            <div className="">whole team needs</div>
          </h1>
          <div className="flex justify-center align-middle items-center gap-8">
            <AnimatedTooltip />

            <span className="">3k+ people joined us, now it's your turn</span>
          </div>
        </div>

        <div className="">{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;
