import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useShipmentStore } from "../hooks/useShipmentStore";
import toast from "react-hot-toast";

export const ShipmentRoute = () => {
  const { carts } = useShipmentStore();
  const location = useLocation();

  if (!carts || carts.length < 1) {
    toast.error("Please select cart to checkout");
  }

  return !carts || carts.length < 1 ? (
    <Navigate to="/cart" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
