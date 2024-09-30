"use client";

import { verifyLogin } from "@/lib/api";
import { OtpPage } from "@/components/OtpPage";

export const OTP = () => {
  return <OtpPage mutationFn={verifyLogin} />;
};
