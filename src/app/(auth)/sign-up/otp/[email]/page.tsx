import { Metadata } from "next";
import { OTP } from "./OTP";

export const metadata: Metadata = {
  title: "Verify OTP",
  description: "Verify OTP with AI-CV",
};

const Otp = () => <OTP />;

export default Otp;
