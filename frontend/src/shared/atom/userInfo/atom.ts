import { UserInfoState } from "./types";

import { atom } from "recoil";

export const userInfoState = atom<UserInfoState>({
  key: "userState",
  default: {
    login: false,
    nickname: "",
  },
});
