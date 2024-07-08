import { request } from "./request";
import { ReqDTO } from "./types";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ReqDTO) => request(body),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["post"] });
    },
  });
};
