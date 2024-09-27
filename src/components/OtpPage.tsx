"use client";

import { useState, useEffect } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { AuthHeader } from "@/components/ui/auth";
import { useParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { resendOtp, IVerifyOtp } from "@/lib/api";
import { useSaveToken } from "@/hooks/useSaveToken";
import toast from "react-hot-toast";
import Link from "next/link";

interface OtpPageProps {
  mutationFn: (data: IVerifyOtp) => Promise<any>;
}

export const OtpPage = ({ mutationFn }: OtpPageProps) => {
  const [value, setValue] = useState("");
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(30);

  const { saveToken, isToken } = useSaveToken();
  const { email: encodedEmail } = useParams();

  const decodedEmail = Array.isArray(encodedEmail)
    ? encodedEmail[0]
    : encodedEmail;

  const email = decodedEmail ? decodeURIComponent(decodedEmail) : "";

  const {
    mutate: resend,
    isSuccess: isResent,
    isPending: isSending,
  } = useMutation({
    mutationFn: resendOtp,
  });

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationFn,
  });

  useEffect(() => {
    if (isResent) {
      setResendDisabled(true);
      toast.success("OTP Sent on mail");
    }
  }, [isResent]);

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

  useEffect(() => {
    if (isSuccess) {
      saveToken(data.access, data.refresh, data.id);
    }
  }, [isSuccess]);

  const handleResendOTP = () => {
    resend({
      email: email?.toString(),
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    mutate({
      email: email?.toString(),
      otp: value!,
    });
  };

  const maskEmail = (email: string) => {
    const [localPart, domain] = email?.split("@");
    return `${localPart.slice(0, 3)}***@${domain}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthHeader title="Otp verification" />

      <div className="flex flex-col font-semibold mb-7 mt-2">
        <span>We will send you a One Time Password on this</span>
        <span>Email address: {maskEmail(email?.toString())}</span>
      </div>

      <div className="flex justify-center">
        <InputOTP
          maxLength={6}
          value={value}
          required
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup className="gap-3">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <button
        className="rounded-lg bg-blue-600 text-white py-3 px-10 w-full mt-5"
        type="submit"
        disabled={isPending || isToken}
      >
        {isPending || isToken ? "Processing" : "Confirm"}
      </button>

      <div className="font-semibold text-center mt-5 flex gap-2 justify-center items-center">
        <span>Did not receive OTP?</span>

        <button
          className={`text-blue-600 ${resendDisabled || isSending ? "cursor-not-allowed opacity-50" : ""}`}
          onClick={handleResendOTP}
          disabled={resendDisabled || isSending}
        >
          {resendDisabled
            ? `Resend in ${timer}s`
            : isSending
              ? "Sending OTP..."
              : "Send OTP"}
        </button>
      </div>

      <Link
        href="/sign-in"
        className="text-center flex justify-center mx-auto my-2 w-[40%] underline"
      >
        Back to Login
      </Link>
    </form>
  );
};
