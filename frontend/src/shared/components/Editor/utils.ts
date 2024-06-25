import { Jodit } from "jodit";

import { ResDTO } from "@shared/api/post/upload";
import { getLocalStorageItem } from "@shared/utils";

const baseURL = import.meta.env.VITE_API_URL;

export const uploader = {
  url: `${baseURL}api/post/upload`,
  headers: {
    Authorization: getLocalStorageItem("userInfo")?.token || "",
  },
  defaultHandlerSuccess: function (data: ResDTO["data"]) {
    (this as unknown as Jodit).selection.insertImage(baseURL + data.baseurl);
  },
};
