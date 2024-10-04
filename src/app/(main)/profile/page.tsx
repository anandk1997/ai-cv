"use client";

import { useGetSession } from "@/hooks/useGetToken";
import { uselogout } from "@/hooks/uselogout";
import { deleteProfile, getProfile, updateProfile } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { PiPencilSimpleLineThin } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";

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
import { useToastLoading } from "@/hooks/useToastLoading";
import { useMutationError } from "@/hooks/useMutationError";
import { Loader } from "@/components/Loader";

const Profile = () => {
  const [isEdit1, setIsEdit1] = useReducer((prev) => !prev, false);

  const queryClient = useQueryClient();

  const { data: session } = useGetSession();

  const { data: profileData, isPending: isProfileLoading } = useQuery({
    queryKey: ["profile", session?.user?.id],
    queryFn: () => getProfile(session?.user?.id),
  });

  const {
    mutate: del,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: deleteProfile,
  });

  const {
    mutate: update,
    isPending: isUpdating,
    isSuccess: isUpdated,
    isError: isUpdateError,
    error: updateError,
  } = useMutation({
    mutationFn: updateProfile,
  });

  const {
    mutate: upload,
    isPending: isUploading,
    isSuccess: isUploaded,
    isError: isUploadError,
    error: uploadError,
  } = useMutation({
    mutationFn: updateProfile,
  });

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const fileInput = e.target;

    if (fileInput && fileInput.files) {
      const file = fileInput!.files![0];

      if (!file) return;

      formData.append("profile_image", file);
      upload({ id: session?.user?.id, formData });
    }
  };

  useEffect(() => {
    if (isUploaded) {
      toast.success("Image uploaded successfully");
    }
  }, [isUploaded]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const gender = formData.get("gender");

    formData.set("first_name", first_name!);
    formData.set("last_name", last_name!);
    formData.set("gender", gender!);

    update({ id: session?.user?.id, formData });
  };

  useToastLoading(isUpdating);
  useToastLoading(isPending);
  useToastLoading(isUploading);

  useMutationError(isError, error);
  useMutationError(isUpdateError, updateError);
  useMutationError(isUploadError, uploadError);

  useEffect(() => {
    if (isUpdated) {
      queryClient.refetchQueries({ queryKey: ["profile"] });

      toast.success("Profile updated successfully");
      setIsEdit1();
    }
  }, [isUpdated]);

  const logout = uselogout();

  useEffect(() => {
    if (isSuccess) logout();
  }, [isSuccess]);

  return (
    <div className="bg-white h-full overflow-auto mt-4 p-12 rounded-3xl">
      {isProfileLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="font-semibold">Photo Profile</h1>

          <section className="flex flex-col lg:flex-row justify-between mt-3 mb-5 gap-2">
            <div className="flex flex-col lg:flex-row align-middle items-center gap-6">
              <div className="flex gap-2 items-center">
                <Image
                  src="https://picsum.photos/id/237/200/300"
                  height={10}
                  width={10}
                  alt=""
                  className="h-16 w-16 rounded-full"
                />

                <label
                  htmlFor="file"
                  className="cursor-pointer text-[#3B6BF6] font-semibold border border-[#3B6BF6] h-12 px-6 rounded-lg flex justify-center align-middle items-center"
                >
                  <input
                    type="file"
                    className="hidden"
                    id="file"
                    name="profile_image"
                    disabled={isUploading}
                    onChange={handleUpload}
                  />
                  {isUploading ? "Uploading" : "Upload New Picture"}
                </label>
              </div>

              <button className="bg-[#F8F8F8] h-12 px-6 font-semibold text-gray-700 rounded-lg w-full lg:w-24">
                Delete
              </button>
            </div>

            {/* <Link
              href=""
              className="bg-[linear-gradient(97deg,_#0075FF_0%,_#0135FF_100%)] flex justify-center items-center px-6 h-12 rounded-lg text-white text-sm"
            >
              Change Password
            </Link> */}
          </section>

          <form onSubmit={handleSubmit}>
            <section className="mt-8">
              <div className="flex justify-between">
                <h1 className="font-semibold">Personal Information</h1>

                <div className="flex gap-2">
                  {isEdit1 ? (
                    <button
                      className="text-gray-600 text-sm border border-gray-300 rounded-sm px-3 h-8 flex justify-center items-center gap-2"
                      onClick={setIsEdit1}
                      type="button"
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      className="text-gray-600 text-sm border border-gray-300 rounded-sm px-3 h-8 flex justify-center items-center gap-2"
                      type="button"
                      onClick={setIsEdit1}
                      disabled={isUpdating}
                    >
                      {isEdit1 ? (
                        isUpdating ? (
                          "Updating"
                        ) : (
                          "Save"
                        )
                      ) : (
                        <>
                          <PiPencilSimpleLineThin />

                          <span>Edit</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 mt-3">
                <div className="flex flex-col flex-1 gap-1">
                  <label htmlFor="" className="text-gray-500 text-sm">
                    First Name
                  </label>

                  <input
                    disabled={!isEdit1}
                    name="first_name"
                    defaultValue={profileData?.first_name ?? ""}
                    className="h-12 bg-[#F5F5F5] rounded-md w-full px-4"
                  />
                </div>

                <div className="flex flex-col flex-1 gap-1">
                  <label htmlFor="" className="text-gray-500 text-sm">
                    Last Name
                  </label>

                  <input
                    disabled={!isEdit1}
                    name="last_name"
                    defaultValue={profileData?.last_name ?? ""}
                    className="h-12 bg-[#F5F5F5] rounded-md w-full px-4"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 mt-3">
                <div className="flex flex-col flex-1 gap-1">
                  <label htmlFor="" className="text-gray-500 text-sm">
                    Gender
                  </label>

                  <select
                    disabled={!isEdit1}
                    name="gender"
                    defaultValue={profileData?.gender ?? ""}
                    className="h-12 bg-[#F5F5F5] rounded-md w-full px-4"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="flex flex-col flex-1 gap-1">
                  <label htmlFor="" className="text-gray-500 text-sm">
                    Date of birth
                  </label>

                  <input
                    type="date"
                    disabled={!isEdit1}
                    className="h-12 bg-[#F5F5F5] rounded-md w-full px-4"
                  />
                </div>
              </div>
            </section>

            <section className="mt-8">
              <div className="flex justify-between">
                <h1 className="font-semibold">Contact Personal</h1>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 mt-3">
                <div className="flex flex-col flex-1 gap-1">
                  <label htmlFor="" className="text-gray-500 text-sm">
                    Phone number
                  </label>

                  <input
                    type="number"
                    disabled={!isEdit1}
                    className="h-12 bg-[#F5F5F5] rounded-md w-full px-4"
                  />
                </div>

                <div className="flex flex-col flex-1 gap-1">
                  <label htmlFor="" className="text-gray-500 text-sm">
                    Email
                  </label>

                  <input
                    disabled={!isEdit1}
                    name="email"
                    defaultValue={profileData?.email ?? ""}
                    className="h-12 bg-[#F5F5F5] rounded-md w-full px-4"
                  />
                </div>
              </div>
            </section>

            <section className="mt-8">
              <div className="flex justify-between">
                <h1 className="font-semibold">General</h1>
              </div>

              <div className="flex justify-between gap-3 mt-3">
                <div className="flex flex-col flex-1 gap-1">
                  <label htmlFor="" className="text-gray-500 text-sm">
                    Language
                  </label>

                  <select
                    name="language"
                    disabled={!isEdit1}
                    className="h-12 bg-[#F5F5F5] rounded-md w-full md:w-[49%] px-4"
                  >
                    <option value="male">English</option>
                    <option value="female">Hindi</option>
                  </select>
                </div>
              </div>

              <button
                className="bg-[linear-gradient(180deg,_#0075FF_0%,_#0135FF_100%)] flex justify-center gap-2 items-center px-20 h-12 rounded-md text-white text-sm mt-14"
                type="submit"
                disabled={isUpdating || !isEdit1}
              >
                <span>{isUpdating ? "Processing" : "Save"}</span>
              </button>
            </section>
          </form>
        </>
      )}
    </div>
  );
};

export default Profile;
