import type { Metadata } from "next";

import SignUpPage from "./SignUpPage";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up with AI-CV",
};

const SignUp = () => {
  return <SignUpPage />;
};

export default SignUp;
