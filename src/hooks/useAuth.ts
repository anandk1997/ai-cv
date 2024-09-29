import { useEffect } from "react";
import { useGetSession } from "./useGetToken";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { data: session, isSuccess } = useGetSession();

  const router = useRouter();

  useEffect(() => {
    if (isSuccess) !session?.access && router.push("/");
  }, [isSuccess]);
};
