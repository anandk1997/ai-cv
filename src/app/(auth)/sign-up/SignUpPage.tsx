"use client";

import Link from "next/link";

import { AuthHeader } from "@/components/ui/auth";
import { Checkbox } from "@/components/ui/auth/checkbox";
import { InputFloatedLabel } from "@/components/ui/InputFloatedLabel";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/lib/api";
import { useMutationError } from "@/hooks/useMutationError";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const SignUpPage = () => {
  const router = useRouter();

  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: signup,
  });

  useMutationError(isError, error);

  useEffect(() => {
    if (isSuccess) {
      router.push(`/sign-up/otp/${data.email}`);
    }
  }, [isSuccess]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const gender = formData.get("gender");

    mutate({
      email: email!.toString(),
      first_name: first_name!.toString(),
      last_name: last_name!.toString(),
      gender: gender!.toString(),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AuthHeader title="Create an account" />

        <div className="flex gap-3 font-semibold mb-7 mt-2">
          <span>Already have an account?</span>

          <Link href="/sign-in" className="text-blue-600">
            Sign in
          </Link>
        </div>

        <InputFloatedLabel label="Email address" name="email" required />

        <div className="flex gap-3 mt-5 w-full">
          <InputFloatedLabel label="First name" name="first_name" required />
          <InputFloatedLabel label="Last name" name="last_name" required />
        </div>

        <div className="flex flex-col flex-1 gap-1 mt-5">
          <select
            required={true}
            name="gender"
            className="h-12 border border-gray-300 rounded-md w-full px-4"
          >
            <option value="" disabled>
              Select Gender
            </option>

            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button
          className="rounded-lg bg-blue-600 text-white py-3 px-10 w-full mt-5"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Processing..." : "Send OTP"}
        </button>

        <label className="flex gap-3 justify-center align-middle content-center items-center mt-5">
          <Checkbox required name="gender" />

          <span className="text-gray-400 text-[10px]">
            By clicking create account, i agree that i have read and accepted
            the Terms of use and Privacy Policy.
          </span>
        </label>
      </form>
    </>
  );
};

export default SignUpPage;
