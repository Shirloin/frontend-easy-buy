import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useValidateToken } from "../lib/useAuthQuery";

export const ProtectedRoute = () => {
  const { isAuthenticated, hasShop } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { error } = useValidateToken();

  if (error) {
    navigate("/login");
  }

  if (location.pathname === "/create-shop" && hasShop) {
    return <Navigate to="/seller" replace />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
