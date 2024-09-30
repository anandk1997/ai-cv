"use client";

import { useAuth } from "@/hooks/useAuth";
import { useGetSession } from "@/hooks/useGetToken";
import { getProfile } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const path = usePathname();
  const { data: session } = useGetSession();

  const { data: profileData } = useQuery({
    queryKey: ["profile", session?.user?.id],
    queryFn: () => getProfile(session?.user?.id),
  });

  useAuth();

  const active = path === "/notifications";

  return (
    <div className="flex justify-end align-middle items-center w-full gap-3">
      <div className="flex flex-col justify-end align-bottom items-end">
        <span className="font-semibold">
          Hi,
          {`${profileData?.first_name ?? ""} ${profileData?.last_name ?? ""}`}
        </span>

        <Link href={"/buy-credits"} className="text-xs text-[#005DFF]">
          Credits left : 300
        </Link>
      </div>

      <Link
        href="/notifications"
        className={cn(
          active
            ? "border border-blue-500 rounded-full text-blue-500"
            : "border border-transparent",
        )}
      >
        <IoIosNotificationsOutline size={35} />
      </Link>

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
