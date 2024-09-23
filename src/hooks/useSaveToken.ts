import axios from "axios";
import { useRouter } from "next/navigation";

export const useSaveToken = () => {
  const router = useRouter();

  const saveToken = async (access: string, refresh: string) => {
    try {
      await axios.post("/api/token", {
        access,
        refresh,
      });

      router.push("/search-cv");
    } catch (error) {}
  };

  return saveToken;
};
