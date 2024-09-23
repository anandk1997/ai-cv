import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const uselogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      const { data } = await axios.delete("/api/token");

      toast.success(data?.message);
      router.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return logout;
};
