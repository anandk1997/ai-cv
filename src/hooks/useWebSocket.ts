import { useEffect, useRef, useState } from "react";

export const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<any[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    socketRef.current.addEventListener("message", handleMessage);
    socketRef.current.addEventListener("open", () =>
      console.info("WebSocket connected"),
    );
    socketRef.current.addEventListener("close", () =>
      console.info("WebSocket disconnected"),
    );
    socketRef.current.addEventListener("error", (error) =>
      console.error("WebSocket error:", error),
    );

    return () => {
      if (socketRef.current) {
        socketRef.current.removeEventListener("message", handleMessage);
        socketRef.current.close();
      }
    };
  }, [url]);

  return { messages, setMessages };
};
