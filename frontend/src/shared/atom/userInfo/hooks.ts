import { useCallback } from "react";

import { useLocalStorage } from "@shared/hooks";

import { userInfoState } from "./atom";
import { UserInfoState } from "./types";

import { useRecoilState } from "recoil";

export const useUserInfoState = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const { setLocalStorageValue } = useLocalStorage("userInfo", setUserInfo);

  const updateUserInfo = useCallback(
    (next: UserInfoState) => {
      setUserInfo(next);
      setLocalStorageValue(next);
    },
    [setLocalStorageValue, setUserInfo]
  );

  return { userInfo, updateUserInfo };
};
