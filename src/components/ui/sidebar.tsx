"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const path = usePathname();

  const selected = (pathName: string) =>
    path === pathName && (
      <span className="border-r-4 rounded-md border-blue-500" />
    );

  return (
    <div className="w-[20%] bg-white py-24">
      <div className=""></div>

      <ul>
        <li className="flex justify-between my-2">
          <Link href={"/search"} className="w-full ps-8 py-3">
            Search CV
          </Link>

          {selected("/search")}
        </li>

        <li className="flex justify-between my-2">
          <Link href={"/shortlisted"} className="w-full block ps-8 py-5">
            Shortlisted CV
          </Link>

          {selected("/shortlisted")}
        </li>

        <li className="flex justify-between my-2">
          <Link
            href={"/transaction-history"}
            className="w-full block ps-8 py-5"
          >
            Transaction History
          </Link>

          {selected("/transaction-history")}
        </li>

        <li className="flex justify-between my-2">
          <Link href={"/search-history"} className="w-full block ps-8 py-5">
            Search History
          </Link>

          {selected("/search-history")}
        </li>

        <li className="flex justify-between my-2">
          <Link href={"/profile"} className="w-full block ps-8 py-5">
            Profile
          </Link>

          {selected("/profile")}
        </li>
      </ul>
    </div>
  );
};
