import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useShipmentStore } from "../hooks/useShipmentStore";

export const ShipmentRoute = () => {
  const { carts } = useShipmentStore();
  const location = useLocation();

  return !carts || carts.length < 1 ? (
    <Navigate to="/cart" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
