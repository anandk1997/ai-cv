import { API } from "@/config/apiClient";

export const login = async (email: string) => {
  const { data } = await API.post("login/", {
    email,
  });

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
