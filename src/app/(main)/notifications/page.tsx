"use client";

import { useGetSession } from "@/hooks/useGetToken";
import { useWebSocket } from "@/hooks/useWebSocket";
import { getNotifications } from "@/lib/api";
import { env } from "@/lib/env/intex";
import { useQuery } from "@tanstack/react-query";
import { GoStack } from "react-icons/go";

const Notifications = () => {
  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });

  const { data: session } = useGetSession();

  const wsUrl = `${env.SOCKET_URL}/notifications/?token=${session?.access}`;

  const { messages } = useWebSocket(wsUrl);

  console.log("messages=", messages);

  return (
    <>
      <div className="h-[calc(100%_-_16px)] overflow-auto mt-4">
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search CV..."
            className="px-4 pb-16 pt-5 rounded-xl w-[70%]"
          />

          <button className="bg-[linear-gradient(180deg,_#0075FF_0%,_#0135FF_100%)] text-white px-10 py-2 rounded-lg text-sm h-12">
            Search
          </button>
        </div>

        <div className="flex justify-between items-center pt-5 w-full md:w-[70%]">
          <h1>Notification</h1>

          <div className="flex gap-3 items-center">
            <button className="bg-[linear-gradient(180deg,_#0075FF_0%,_#0135FF_100%)] text-white px-4 py-2 rounded-lg text-sm">
              All
            </button>
            <button className="bg-white text-gray-400 px-4 py-2 rounded-lg text-sm">
              Unread (6)
            </button>
          </div>
        </div>

        <div className="mt-4">
          {Array.from({ length: 20 }).map(() => (
            <div className="mt-6" key={Math.random()}>
              <span className="text-gray-400 text-xs">Today</span>

              <div className="flex justify-between items-center mt-5 w-full md:w-[70%]">
                <div className="flex items-center gap-4">
                  <span className="text-[#005dff] bg-[#c2d9ff] rounded-full h-10 w-10 flex justify-center items-center">
                    <GoStack size={17} />
                  </span>

                  <div className="flex flex-col gap-1">
                    <span className="">lorem Ipsum</span>

                    <span className="text-gray-400 text-xs">
                      Lorem ipsum dolor sit amet consectetur.
                    </span>
                  </div>
                </div>

                <span className="text-gray-400 text-sm">14:36</span>
              </div>

              <div className="flex justify-between items-center mt-5 w-full md:w-[70%]">
                <div className="flex items-center gap-4">
                  <span className="text-white bg-gray-300 rounded-full h-10 w-10 flex justify-center items-center">
                    <GoStack size={17} />
                  </span>

                  <div className="flex flex-col gap-1">
                    <span className="">lorem Ipsum</span>

                    <span className="text-gray-400 text-xs">
                      Lorem ipsum dolor sit amet consectetur.
                    </span>
                  </div>
                </div>

                <span className="text-gray-400 text-sm">14:36</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
