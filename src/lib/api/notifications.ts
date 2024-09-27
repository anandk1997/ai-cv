import { API } from "@/config/apiClient";

export const getNotifications = async () => {
  const { data } = await API.get("notifications/");
  return data;
};

export const markRead = async (id: string) => {
  const { data } = await API.patch(`notifications/read/${id}/`);
  return data;
};
