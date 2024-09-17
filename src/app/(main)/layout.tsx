import { Sidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import React from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-[100vh] w-[100%] bg-blue-100">
      <Sidebar />

      <div className="w-[80%] p-14">
        <div className="flex justify-end align-middle items-center w-full gap-3">
          <div className="flex flex-col justify-end align-bottom items-end">
            <span className="font-semibold">Hi, Username</span>

            <span className="text-xs text-[#005DFF]">Credits left : 300</span>
          </div>

          <Image
            src="https://picsum.photos/id/237/200/300"
            height={10}
            width={10}
            alt=""
            className="h-9 w-9 rounded-full"
          />
        </div>

        <div className="h-full overflow-hidden roundeblock">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
