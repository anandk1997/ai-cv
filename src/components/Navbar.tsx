"use client";

import { useGetSession } from "@/hooks/useGetToken";
import { getProfile } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export const Navbar = () => {
  const { data: session } = useGetSession();

  const { data: profileData } = useQuery({
    queryKey: ["profile", session?.user?.id],
    queryFn: () => getProfile(session?.user?.id),
  });

  return (
    <div className="flex justify-end align-middle items-center w-full gap-3">
      <div className="flex flex-col justify-end align-bottom items-end">
        <span className="font-semibold">
          Hi,
          {`${profileData?.first_name ?? ""} ${profileData?.last_name ?? ""}`}
        </span>

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
  );
};
