import { request } from "./request";
import { ReqDTO } from "./types";

import { useQuery } from "@tanstack/react-query";

export const usePostQuery = (body: ReqDTO) => {
  return useQuery({
    queryFn: () => request(body),
    queryKey: ["post", body],
    enabled: !!body.id,
  });
};
