import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useValidateToken } from "../lib/useAuthQuery";

export const ProtectedRoute = () => {
  const { isAuthenticated, setToken, hasShop } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { data, isError } = useValidateToken();

  if (isError) {
    // setToken("");
    navigate("/login");
  }

  if (location.pathname === "/create-shop" && hasShop) {
    return <Navigate to="/seller" state={{ from: location }} replace />;
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
