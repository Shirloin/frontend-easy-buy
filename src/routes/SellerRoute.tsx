import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react"
import UserService from "../services/UserService"

export const SellerRoute = () => {
    const { user } = useAuth()
    const [hasShop, setHasShop] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (user) {
            const checkHasShop = async () => {
                try {
                    const response = await UserService.getShop(user._id);
                    setHasShop(response.data !== null);
                } catch (error) {
                    console.error("Failed to check shop existence", error);
                    setHasShop(false);
                }
            };
            checkHasShop();
        } else {
            setHasShop(false);
        }
    }, [user])

    return hasShop ? (
        <Outlet />
    ) : (
        <Navigate to="/create-shop" state={{ from: location }} replace />
    )
}