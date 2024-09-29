"use client";

import { MdArrowForwardIos } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { SiAdguard } from "react-icons/si";
import { TbUserX } from "react-icons/tb";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProfile } from "@/lib/api";
import { useToastLoading } from "@/hooks/useToastLoading";
import { useEffect } from "react";
import { useMutationError } from "@/hooks/useMutationError";
import toast from "react-hot-toast";
import { useGetSession } from "@/hooks/useGetToken";
import { uselogout } from "@/hooks/uselogout";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Settings = () => {
  const logout = uselogout();
  const queryClient = useQueryClient();
  const { data: session } = useGetSession();

  const {
    mutate: del,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: deleteProfile,
  });

  useToastLoading(isPending);
  useMutationError(isError, error);

  useEffect(() => {
    if (isSuccess) {
      queryClient.refetchQueries({ queryKey: ["session"] });
      toast.success("Account deleted successfully");
      logout();
    }
  }, [isSuccess]);

  return (
    <div className="h-[calc(100%_-_35px)] mt-4 px-8 py-16 overflow-auto bg-white">
      <h1 className="pb-7 text-2xl font-semibold">Settings</h1>

      <div className="flex flex-col justify-between h-[90%]">
        <div className="flex flex-col gap-4">
          <button className="bg-[hsl(217.5deg_100%_96.86%)] rounded-lg text-black font-bold text-lg px-4 py-6 flex items-center gap-4">
            <IoMdUnlock size={25} className="text-blue-600" />
            Change Password
            <MdArrowForwardIos size={25} className="flex ms-auto" />
          </button>

          <AlertDialog>
            <AlertDialogTrigger
              className="bg-[hsl(0deg_100%_96.86%)] rounded-lg font-bold text-lg px-4 py-6 flex items-center gap-4 text-red-500"
              disabled={isPending}
            >
              <TbUserX size={25} />
              Delete Account
              <MdArrowForwardIos
                size={25}
                className="flex ms-auto text-black"
              />
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction
                  className="bg-red-600 hover:bg-red-500"
                  onClick={() => del(session?.user?.id)}
                  disabled={isPending}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <button className="bg-[hsl(0deg_0%_96.86%)] rounded-lg font-bold text-lg px-4 py-6 flex items-center gap-4">
          <SiAdguard size={25} className="text-blue-600" />
          Privacy Policy
          <MdArrowForwardIos size={25} className="flex ms-auto text-black" />
        </button>
      </div>
    </div>
  );
};

export default Settings;
