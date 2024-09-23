"use client";

import Link from "next/link";

import { AuthHeader } from "@/components/ui/auth";
import { InputFloatedLabel } from "@/components/ui/InputFloatedLabel";
import { useMutation } from "@tanstack/react-query";
import { useMutationError } from "@/hooks/useMutationError";
import { login } from "@/lib/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const SignInPage = () => {
  const router = useRouter();

  const [sentEmail, setSentEmail] = useState("");

  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: login,
  });

  useMutationError(isError, error);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");

    setSentEmail(email!.toString());

    mutate(email!.toString());
  };

  useEffect(() => {
    if (isSuccess) {
      router.push(`/sign-in/otp/${sentEmail}`);
    }
  }, [isSuccess]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AuthHeader title="Sign in" />

        <div className="flex gap-3 font-medium mb-7 mt-2">
          <span>New user?</span>

          <Link href="/sign-up" className="text-blue-600">
            Create an Account
          </Link>
        </div>

        <InputFloatedLabel label="Email address" name="email" required />

        <div className="flex justify-between align-middle items-center gap-2 mt-6">
          <Link href="/forgot-password" className="text-gray-600">
            Forgot password?
          </Link>

          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-blue-600 text-white py-3 px-10"
          >
            {isPending ? "Processing..." : "Send OTP"}
          </button>
        </div>
      </form>
    </>
  );
};
