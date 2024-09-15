import Link from "next/link";
import type { Metadata } from "next";

import { AuthHeader } from "@/components/ui/auth";
import { InputFloatedLabel } from "@/components/ui/InputFloatedLabel";

export const metadata: Metadata = {
  title: "Forgot password",
  description: "Reset password with with AI-CV",
};

const ForgotPassword = () => {
  return (
    <form>
      <AuthHeader title="Forgot password" />

      <div className="font-semibold mb-7 mt-2">
        No worriest! Just enter your email and we'll send you a reset password
        link.
      </div>

      <InputFloatedLabel label="Email address" />

      <button
        className="rounded-lg bg-blue-600 text-white py-3 px-10 w-full mt-5"
        type="submit"
      >
        Continue
      </button>

      <div className="font-semibold text-center mt-5 flex gap-2 justify-center align-middle items-center">
        <span>Just remember?</span>

        <Link href="/sign-in" className="">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default ForgotPassword;
