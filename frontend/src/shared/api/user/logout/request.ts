import { api } from "@shared/api";

import { ResDTO } from "./types";

export const request = async () => {
  const { data } = await api.get<ResDTO>("/api/user/logout");

  return data;
};
