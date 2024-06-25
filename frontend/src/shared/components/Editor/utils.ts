import { getLocalStorageItem } from "@shared/utils";

const baseURL = import.meta.env.VITE_API_URL;

export const uploader = {
  url: `${baseURL}api/post/upload`,
  headers: {
    Authorization: getLocalStorageItem("userInfo")?.token || "",
  },
  defaultHandlerSuccess: function (data) {
    console.log(data);

    this.selection.insertImage(baseURL + data.baseurl);
  },
};
