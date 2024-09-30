import { API } from "@/config/apiClient";

export const getNotifications = async () => {
  const data: any = await API.get("notifications/");
  return data?.results;
};

export const markRead = async (id: string) => {
  const { data } = await API.patch(`notifications/read/${id}/`);
  return data;
};
