import axios from "axios";

import { getLocalStorageItem } from "@shared/utils";

const baseURL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL,
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  const userInfo = getLocalStorageItem("userInfo");

  if (userInfo && userInfo.token) {
    config.headers.Authorization = userInfo.token;
  }

  return config;
});
