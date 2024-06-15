import { Navigate, Outlet } from "react-router-dom";

import { useUserInfoState } from "../../shared/atom/userInfo";

export const ProtectedRouter: React.FC = () => {
  const { userInfo } = useUserInfoState();

  if (!userInfo.login) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
