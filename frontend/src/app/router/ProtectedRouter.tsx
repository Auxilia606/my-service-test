import { Navigate, Outlet } from "react-router-dom";

import { useUserInfoState } from "@shared/atom/userInfo";

export const ProtectedRouter = () => {
  const { userInfo } = useUserInfoState();

  if (!userInfo.token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
