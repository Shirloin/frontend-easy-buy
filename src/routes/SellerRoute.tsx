import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import ShopService from "../services/ShopService"

export const SellerRoute = () => {
    const [hasShop, setHasShop] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const checkHasShop = async () => {
            try {
                const response = await ShopService.getUserShop();
                setHasShop(response.data.shop !== null);
            } catch (error) {
                setHasShop(false);
            }
        };
        checkHasShop();
    }, [])

    return hasShop ? (
        <Outlet />
    ) : (
        <Navigate to="/create-shop" state={{ from: location }} replace />
    )
}