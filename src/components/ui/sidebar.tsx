"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BsGrid } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";
import { GoGear, GoStack } from "react-icons/go";
import { MdChatBubbleOutline } from "react-icons/md";
import { PiSignOutThin } from "react-icons/pi";
import AICV from "@/images/ai-cv.png";
import { uselogout } from "@/hooks/uselogout";

export const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();

  const selected = (pathName: string) =>
    path.includes(pathName) && (
      <span className="border-r-4 h-12 rounded-md border-blue-500" />
    );

  const active = (pathName: string) =>
    path === pathName ? "text-[#005dff] font-semibold" : "text-gray-400";

  const logout = uselogout();

  return (
    <div className="w-[30%] lg:w-[20%] bg-white py-8 flex flex-col gap-3 h-full overflow-auto">
      <div className="flex items-center gap-2 ps-7 py-3 text-[#005dff] font-bold text-sm md:text-2xl">
        <Image
          src={AICV}
          height={20}
          width={20}
          alt=""
          className="h-8 w-8 md:h-14 md:w-14"
        />

        <span className="">AI CV</span>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="">
          <ul>
            <li className="flex justify-between items-center my-2">
              <Link
                href={"/search-cv"}
                className={cn(
                  "flex align-middle items-center gap-3 w-full ps-8 py-3 my-3 text-sm md:text-base",
                  active("/search-cv"),
                )}
              >
                <BsGrid size={23} />

                <span>Search CV</span>
              </Link>

              {selected("/search-cv")}
            </li>

            <li className="flex justify-between items-center my-2">
              <Link
                href={"/shortlisted"}
                className={cn(
                  "flex align-middle items-center gap-3 w-full ps-8 py-3 my-3 text-sm md:text-base",
                  active("/shortlisted"),
                )}
              >
                <GoStack size={23} />

                <span>Shortlisted CV</span>
              </Link>

              {selected("/shortlisted")}
            </li>

            <li className="flex justify-between items-center my-2">
              <Link
                href={"/transaction-history"}
                className={cn(
                  "flex align-middle items-center gap-3 w-full ps-8 py-3 my-3 text-sm md:text-base",
                  active("/transaction-history"),
                )}
              >
                <MdChatBubbleOutline size={23} />

                <span>Transaction History</span>
              </Link>

              {selected("/transaction-history")}
            </li>

            <li className="flex justify-between items-center my-2">
              <Link
                href={"/search-history"}
                className={cn(
                  "flex align-middle items-center gap-3 w-full ps-8 py-3 my-3 text-sm md:text-base",
                  active("/search-history"),
                )}
              >
                <GoGear size={23} />

                <span>Search History</span>
              </Link>

              {selected("/search-history")}
            </li>

            <li className="flex justify-between items-center my-2">
              <Link
                href={"/profile"}
                className={cn(
                  "flex align-middle items-center gap-3 w-full ps-8 py-3 my-3 text-sm md:text-base",
                  active("/profile"),
                )}
              >
                <GoGear size={23} />

                <span>Profile</span>
              </Link>

              {selected("/profile")}
            </li>
          </ul>
        </div>

        <div className="">
          <ul>
            <li className="flex justify-between items-center my-2">
              <Link
                href={"/settings"}
                className={cn(
                  "flex align-middle items-center gap-3 w-full ps-8 py-3 my-3 text-sm md:text-base",
                  active("/settings"),
                )}
              >
                <CiCircleInfo size={23} />

                <span>Settings</span>
              </Link>

              {selected("/settings")}
            </li>

            <li className="flex justify-between items-center my-2">
              <button
                className={cn(
                  "flex align-middle items-center gap-3 w-full ps-8 py-3 my-3 text-sm md:text-base",
                  active("/sign-out"),
                )}
                onClick={logout}
              >
                <PiSignOutThin size={23} />

                <span>Sign Out</span>
              </button>

              {selected("/sign-out")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
