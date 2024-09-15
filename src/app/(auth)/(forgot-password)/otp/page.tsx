import { Metadata } from "next";

import { OtpPage } from "./OtpPage";

export const metadata: Metadata = {
  title: "Verify OTP",
  description: "Verify OTP with AI-CV",
};

const Otp = () => <OtpPage />;

export default Otp;
