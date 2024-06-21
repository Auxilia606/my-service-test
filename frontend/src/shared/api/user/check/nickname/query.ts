import { request } from "./request";
import { ReqDTO } from "./types";

import { useMutation } from "@tanstack/react-query";

export const useUserCheckNicknameMutation = () => {
  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
  });
};
