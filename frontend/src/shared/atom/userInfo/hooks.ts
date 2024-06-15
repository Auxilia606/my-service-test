import { userInfoState } from "./atom";

import { useRecoilState } from "recoil";

export const useUserInfoState = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return { userInfo, setUserInfo };
};
