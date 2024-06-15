import { request } from "./request";

import { useMutation } from "@tanstack/react-query";

export const useUserLogoutMutation = () => {
  return useMutation({
    mutationFn: () => request(),
  });
};
