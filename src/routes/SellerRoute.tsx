import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useValidateShop } from "../lib/useAuthQuery";

export const SellerRoute = () => {
  const { hasShop } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { error } = useValidateShop();
  if (error) {
    navigate("/");
  }

  return hasShop ? (
    <Outlet />
  ) : (
    <Navigate to="/create-shop" state={{ from: location }} replace />
  );
};
