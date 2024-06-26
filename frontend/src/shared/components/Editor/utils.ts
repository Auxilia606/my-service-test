import { Jodit } from "jodit";

import { ResDTO } from "@shared/api/post/upload";

const baseURL = import.meta.env.VITE_API_URL;

type UploaderParams = {
  token: string;
};

export const uploader = (params: UploaderParams) => ({
  url: `${baseURL}api/post/upload`,
  headers: {
    Authorization: params.token,
  },
  defaultHandlerSuccess: function (data: ResDTO["data"]) {
    (this as unknown as Jodit).selection.insertImage(baseURL + data.baseurl);
  },
});
