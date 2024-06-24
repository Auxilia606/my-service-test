import { api } from "@shared/api";

import { ReqDTO, ResDTO } from "./types";

export const request = async (body: ReqDTO) => {
  const { data } = await api.post<ResDTO>("/api/user/login", body);

  data.token && setAuthorization(data.token);

  return data;
};

const setAuthorization = (token: string) => {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = token;

    return config;
  });
};
