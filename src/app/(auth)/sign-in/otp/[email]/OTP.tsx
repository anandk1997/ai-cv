"use client";

import React from "react";
import { OtpPage } from "../../../../../components/OtpPage";
import { verifyLogin } from "@/lib/api";

export const OTP = () => {
  return <OtpPage mutationFn={verifyLogin} />;
};
