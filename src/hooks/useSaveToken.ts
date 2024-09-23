import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useSaveToken = () => {
  const router = useRouter();

  const [isToken, setIsToken] = useState(false);

  const saveToken = async (access: string, refresh: string, id: string) => {
    try {
      setIsToken(true);
      await axios.post("/api/token", {
        access,
        refresh,
        user: JSON.stringify({ id }),
      });

      router.push("/search-cv");
    } catch (error) {
    } finally {
      setIsToken(false);
    }
  };

  return { saveToken, isToken };
};
