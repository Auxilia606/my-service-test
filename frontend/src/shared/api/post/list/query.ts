import { request } from "./request";
import { ReqDTO } from "./types";

import { useQuery } from "@tanstack/react-query";

export const usePostListQuery = (body: ReqDTO) => {
  return useQuery({
    queryFn: () => request(body),
    queryKey: ["post", "list", body],
  });
};
