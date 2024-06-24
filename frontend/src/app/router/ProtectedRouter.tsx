import { Navigate, Outlet } from "react-router-dom";

import { useUserInfoState } from "@shared/atom/userInfo";

export const ProtectedRouter: React.FC = () => {
  const { userInfo } = useUserInfoState();

  if (!userInfo.token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
