import Link from "next/link";
import type { Metadata } from "next";

import { AuthHeader } from "@/components/ui/auth";
import { Checkbox } from "@/components/ui/auth/checkbox";
import { InputFloatedLabel } from "@/components/ui/InputFloatedLabel";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up with AI-CV",
};

const SignUp = () => {
  return (
    <>
      <AuthHeader title="Create an account" />

      <div className="flex gap-3 font-semibold mb-7 mt-2">
        <span>Already have an account?</span>

        <Link href="/sign-in" className="text-blue-600">
          Sign in
        </Link>
      </div>

      <InputFloatedLabel label="Email address" />

      <div className="flex gap-3 mt-5 w-full">
        <InputFloatedLabel label="First name" />
        <InputFloatedLabel label="Last name" />
      </div>

      <button className="rounded-lg bg-blue-600 text-white py-3 px-10 w-full mt-5">
        Send OTP
      </button>

      <label className="flex gap-3 justify-center align-middle content-center items-center mt-5">
        <Checkbox />

        <span className="text-gray-400 text-[10px]">
          By clicking create account, i agree that i have read and accepted the
          Terms of use and Privacy Policy.
        </span>
      </label>
    </>
  );
};

export default SignUp;
