"use client";

import { useState, useEffect } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { AuthHeader } from "@/components/ui/auth";

export const OtpPage = () => {
  const [value, setValue] = useState("");
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (resendDisabled) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setResendDisabled(false);
            return 30;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [resendDisabled]);

  const handleResendOTP = () => {
    setResendDisabled(true);
  };

  return (
    <form>
      <AuthHeader title="Otp verification" />

      <div className="flex flex-col font-semibold mb-7 mt-2">
        <span>We will send you a One Time Password on this</span>
        <span>Email address: eu*******e@example.com</span>
      </div>

      <div className="flex justify-center">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup className="gap-3">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <button
        className="rounded-lg bg-blue-600 text-white py-3 px-10 w-full mt-5"
        type="submit"
      >
        Confirm
      </button>

      <div className="font-semibold text-center mt-5 flex gap-2 justify-center items-center">
        <span>Did not receive OTP?</span>

        <button
          className={`text-blue-600 ${resendDisabled ? "cursor-not-allowed opacity-50" : ""}`}
          onClick={handleResendOTP}
          disabled={resendDisabled}
        >
          {resendDisabled ? `Resend in ${timer}s` : "Send OTP"}
        </button>
      </div>
    </form>
  );
};
