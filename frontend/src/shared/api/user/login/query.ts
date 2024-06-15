import { request } from "./request";
import { ReqDTO } from "./types";

import { useMutation } from "@tanstack/react-query";

export const useUserLoginMutation = () => {
  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
  });
};
