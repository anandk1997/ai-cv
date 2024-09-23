import { API } from "@/config/apiClient";

export const login = async (email: string) => {
  const { data } = await API.post("login/", {
    email,
  });

  return data;
};

export const verifyLogin = async (payload: IVerifyOtp) => {
  const { data } = await API.post("verify-login/", payload);
  return data;
};

interface ISignup {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

export const signup = async (payload: ISignup) => {
  const { data } = await API.post("signup/", payload);
  return data;
};

export interface IVerifyOtp {
  email: string;
  otp: string;
}

export const verifyOtp = async (payload: IVerifyOtp) => {
  const { data } = await API.post("email-verify/", payload);
  return data;
};

interface IResendOtp {
  email: string;
}

export const resendOtp = async (payload: IResendOtp) => {
  const { data } = await API.post("resend-otp/", payload);
  return data;
};
