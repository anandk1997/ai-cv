import { useEffect, useRef, useState } from "react";

export const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<any[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onmessage = (event) => {
      setMessages((prev) => [...prev, JSON.parse(event.data)]);
    };

    socketRef.current.onopen = () => console.log("WebSocket connected");
    socketRef.current.onclose = () => console.log("WebSocket disconnected");

    return () => {
      if (socketRef.current) socketRef.current.close();
    };
  }, [url]);

  return { messages, setMessages };
};
