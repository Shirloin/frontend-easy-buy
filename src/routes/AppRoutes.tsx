import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import HomePage from '../pages/HomePage'
import { ProtectedRoute } from './ProtectedRoute'
import Layout from '../components/Layout'
import { GuestRoute } from './GuestRoute'
import SellerLayout from '../components/seller/SellerLayout'
import SellerDashboardPage from '../pages/seller/DashboardPage'
import AddProductPage from '../pages/seller/AddProductPage'
import RegisterShopPage from '../pages/seller/RegisterShopPage'
import { SellerRoute } from './SellerRoute'
export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route element={<ProtectedRoute />}>
                    <Route path='/create-shop' element={<RegisterShopPage />} />
                    <Route path='seller' element={<SellerLayout />}>

                        <Route element={<SellerRoute />}>
                            <Route index element={<SellerDashboardPage />} />
                            <Route path='add-product' element={<AddProductPage />} />
                        </Route>
                    </Route>
                </Route>


            </Route>
            <Route element={<GuestRoute />} >
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
            </Route>
        </Routes>
    )
}