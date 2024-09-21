import { SignInPage } from "./SignInPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in with AI-CV",
};

const SignIn = () => {
  return <SignInPage />;
};

export default SignIn;
