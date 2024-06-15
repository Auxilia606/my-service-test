import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouter: React.FC = () => {
  const userInfo = false;

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
