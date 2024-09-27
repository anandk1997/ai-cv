import { API } from "@/config/apiClient";

export const login = async (email: string) => {
  const { data } = await API.post("user/login/", {
    email,
  });

  return data;
};

export const verifyLogin = async (payload: IVerifyOtp) => {
  const { data } = await API.post("user/verify-login/", payload);
  return data;
};

interface ISignup {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

export const signup = async (payload: ISignup) => {
  const { data } = await API.post("user/signup/", payload);
  return data;
};

export interface IVerifyOtp {
  email: string;
  otp: string;
}

export const verifyOtp = async (payload: IVerifyOtp) => {
  const { data } = await API.post("user/email-verify/", payload);
  return data;
};

interface IResendOtp {
  email: string;
}

export const resendOtp = async (payload: IResendOtp) => {
  const { data } = await API.post("user/resend-otp/", payload);
  return data;
};

export const getProfile = async (id: string) => {
  if (!id) return null;
  const { data } = await API.get(`user/${id}`);
  return data;
};

interface IUpdateProfile {
  id: string;
  formData: FormData;
}

export const updateProfile = async ({ id, formData }: IUpdateProfile) => {
  const { data } = await API.patch(`user/${id}/`, formData);
  return data;
};

export const deleteProfile = async (id: string) => {
  const { data } = await API.delete(`user/${id}`);
  return data;
};
