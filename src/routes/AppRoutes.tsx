import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/HomePage";
import { ProtectedRoute } from "./ProtectedRoute";
import Layout from "../components/Layout";
import { GuestRoute } from "./GuestRoute";
import SellerLayout from "../components/seller/SellerLayout";
import SellerDashboardPage from "../pages/seller/DashboardPage";
import AddProductPage from "../pages/seller/AddProductPage";
import { SellerRoute } from "./SellerRoute";
import ProductPage from "../pages/seller/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import { DefaultRoute } from "./DefaultRoute";
import CreateShopPage from "../pages/seller/CreateShopPage";
import CartPage from "../pages/CartPage";
import ShipmentPage from "../pages/ShipmentPage";
import { ShipmentRoute } from "./ShipmentRoute";
import OrderPage from "../pages/seller/OrderPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<DefaultRoute />}>
          {/* Public Route */}
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />

          <Route element={<ProtectedRoute />}>
            {/* Protected Route */}
            <Route path="create-shop" element={<CreateShopPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route element={<ShipmentRoute />}>
              <Route path="shipment" element={<ShipmentPage />} />
            </Route>
            <Route path="seller" element={<SellerLayout />}>
              <Route element={<SellerRoute />}>
                {/* Seller Route */}
                <Route index element={<SellerDashboardPage />} />
                <Route path="add-product" element={<AddProductPage />} />
                <Route path="products" element={<ProductPage />} />
                <Route path="orders" element={<OrderPage />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
      <Route element={<GuestRoute />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
