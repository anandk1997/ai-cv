import { useEffect } from "react";
import toast from "react-hot-toast";

export const useToastLoading = (isPending: boolean) => {
  useEffect(() => {
    let toastId: any;

    if (isPending) toastId = toast.loading("Loading...");
    else toastId && toast.dismiss(toastId);

    return () => toastId && toast.dismiss(toastId);
  }, [isPending]);
};
