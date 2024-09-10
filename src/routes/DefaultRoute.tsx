import { Outlet, useNavigate } from "react-router-dom";
import { useValidateToken } from "../lib/useAuthQuery";

export const DefaultRoute = () => {
  const navigate = useNavigate();
  const { error } = useValidateToken();

  if (error) {
    navigate("/login");
  }
  return <Outlet />;
};
