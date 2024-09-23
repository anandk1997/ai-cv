"use client";

import React from "react";
import { verifyOtp } from "@/lib/api";
import { OtpPage } from "@/components/OtpPage";

export const OTP = () => {
  return <OtpPage mutationFn={verifyOtp} />;
};
