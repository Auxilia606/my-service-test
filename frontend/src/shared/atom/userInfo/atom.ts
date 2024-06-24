import { getLocalStorageItem } from "@shared/utils";

import { UserInfoState } from "./types";

import { atom } from "recoil";

export const userInfoState = atom<UserInfoState>({
  key: "userState",
  default: getLocalStorageItem("userInfo") || {
    nickname: "",
    token: "",
  },
});
