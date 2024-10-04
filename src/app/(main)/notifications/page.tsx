"use client";

import { useGetSession } from "@/hooks/useGetToken";
import { useMutationError } from "@/hooks/useMutationError";
import { useToastLoading } from "@/hooks/useToastLoading";
import { useWebSocket } from "@/hooks/useWebSocket";
import { getNotifications, markRead } from "@/lib/api";
import { env } from "@/lib/env/intex";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { GoStack } from "react-icons/go";

const Notifications = () => {
  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });

  const { data: session } = useGetSession();

  const wsUrl = useMemo(
    () => `${env.SOCKET_URL}/notifications/?token=${session?.access}`,
    [session],
  );

  const { messages, setMessages } = useWebSocket(wsUrl);

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: markRead,
  });

  useToastLoading(isPending);
  useMutationError(isError, error);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Notification marked as read`");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (notifications) {
      const newNotifications = Array.isArray(notifications)
        ? notifications.filter((notification) => notification !== null)
        : [notifications];

      setMessages((prev) => [...prev, ...newNotifications]);
    }
  }, [notifications, setMessages]);

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
          {messages
            ?.slice()
            .reverse()
            .map((item: any) => (
              <div
                className="mt-6 cursor-pointer"
                key={Math.random()}
                onClick={() => mutate(item?.id)}
              >
                <span className="text-gray-400 text-xs">Today</span>

                <div className="flex justify-between items-center mt-5 w-full md:w-[70%]">
                  <div className="flex items-center gap-4">
                    <span className="text-[#005dff] bg-[#c2d9ff] rounded-full h-10 w-10 flex justify-center items-center">
                      <GoStack size={17} />
                    </span>

                    <div className="flex flex-col gap-1">
                      <span className="">{item?.user?.email}</span>

                      <span className="text-gray-400 text-xs">
                        {item?.message}
                      </span>
                    </div>
                  </div>

                  <span className="text-gray-400 text-sm">
                    {item?.created_at}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
