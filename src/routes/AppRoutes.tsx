import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/HomePage";
import { ProtectedRoute } from "./ProtectedRoute";
import Layout from "../components/Layout";
import { GuestRoute } from "./GuestRoute";
import SellerLayout from "../components/seller/SellerLayout";
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
import SellerChatPage from "../pages/seller/ChatPage";
import ChatPage from "../pages/ChatPage";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
import ReviewPage from "../pages/ReviewPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultRoute />}>
        <Route path="/" element={<Layout />}>
          {/* Public Route */}
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route element={<ProtectedRoute />}>
            {/* Protected Route */}
            <Route path="create-shop" element={<CreateShopPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="review" element={<ReviewPage />} />
            <Route element={<ShipmentRoute />}>
              <Route path="shipment" element={<ShipmentPage />} />
            </Route>
            <Route element={<SellerRoute />}>
              <Route path="seller" element={<SellerLayout />}>
                {/* Seller Route */}
                <Route path="chat" element={<SellerChatPage />} />
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
