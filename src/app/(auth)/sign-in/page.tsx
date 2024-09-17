import Link from "next/link";
import type { Metadata } from "next";

import { AuthHeader } from "@/components/ui/auth";
import { InputFloatedLabel } from "@/components/ui/InputFloatedLabel";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in with AI-CV",
};

const SignIn = () => {
  return (
    <>
      <AuthHeader title="Sign in" />

      <div className="flex gap-3 font-medium mb-7 mt-2">
        <span>New user?</span>

        <Link href="/sign-up" className="text-blue-600">
          Create an Account
        </Link>
      </div>

      <InputFloatedLabel label="Email address" />

      <div className="flex justify-between align-middle items-center mt-6">
        <Link href="/forgot-password" className="text-gray-600">
          Forgot password?
        </Link>

        <button className="rounded-lg bg-blue-600 text-white py-3 px-10">
          Send OTP
        </button>
      </div>
    </>
  );
};

export default SignIn;
