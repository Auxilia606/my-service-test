import { api } from "@shared/api";

import { ReqDTO, ResDTO } from "./types";

export const request = async (body: ReqDTO) => {
  const { data } = await api.post<ResDTO>("/api/user/sign-up", body);

  return data;
};
