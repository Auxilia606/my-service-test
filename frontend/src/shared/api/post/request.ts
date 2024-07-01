import { api } from "@shared/api";

import { ReqDTO, ResDTO } from "./types";

export const request = async (body: ReqDTO) => {
  const { data } = await api.get<ResDTO>(`/api/post/${body.id}`);

  return data;
};
