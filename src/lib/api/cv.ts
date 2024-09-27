import { API } from "@/config/apiClient";

interface ISearchCV {
  search_query: string;
}

export const searchCV = async (payload: ISearchCV) => {
  const { data } = await API.post("cv-search/", payload);
  return data;
};

export const searchCvHistory = async () => {
  const { data } = await API.get("cv-search-history/");
  return data;
};

export const cvDetails = async (id: string) => {
  const { data } = await API.get(`cv-search-history/${id}/`);
  return data;
};

export const deleteCV = async (id: string) => {
  const { data } = await API.get(`cv-search-history/${id}/`);
  return data;
};

export const getShortlistedCVs = async () => {
  const { data } = await API.get("shortlist-cv/");
  return data;
};

interface IShortlisted {
  candiate_email: string;
  shortlisted_data: any;
}

export const shortlistCV = async (payload: IShortlisted) => {
  const { data } = await API.post("shortlist-cv/", payload);
  return data;
};

export const unShortlistCV = async (id: string) => {
  const { data } = await API.delete(`remove-shortlist-cv/${id}/`);
  return data;
};
