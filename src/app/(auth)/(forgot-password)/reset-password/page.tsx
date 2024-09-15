import Link from "next/link";
import type { Metadata } from "next";

import { AuthHeader } from "@/components/ui/auth";
import { InputFloatedLabel } from "@/components/ui/InputFloatedLabel";

export const metadata: Metadata = {
  title: "Reset password",
  description: "Reset password with with AI-CV",
};

const ResetPassword = () => {
  return (
    <form>
      <AuthHeader title="Create a new password" />

      <InputFloatedLabel
        label="Enter new password"
        type="password"
        className="my-5"
      />

      <InputFloatedLabel label="Confirm new password" type="password" />

      <button
        className="rounded-lg bg-blue-600 text-white py-3 px-10 w-full mt-5"
        type="submit"
      >
        Reset
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

export default ResetPassword;
