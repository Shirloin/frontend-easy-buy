import { Outlet } from "react-router-dom";
import { useValidateToken } from "../lib/useAuthQuery";

export const DefaultRoute = () => {
  useValidateToken();
  return <Outlet />;
};
