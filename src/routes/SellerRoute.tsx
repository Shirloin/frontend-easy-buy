import { Navigate, Outlet, useLocation } from "react-router-dom"
import ShopService from "../services/ShopService"
import { useAuth } from "../contexts/AuthContext"
import { useQuery } from "@tanstack/react-query"

export const SellerRoute = () => {
    const { hasShop, setHasShop, setShop } = useAuth()
    const location = useLocation()

    const checkHasShop = async () => {
        try {
            const response = await ShopService.getUserShop();
            const newShop = response.data.shop
            if (newShop != null) {
                setHasShop(true)
                setShop(newShop)
            }
            return response.data
        } catch (error) {
            setHasShop(false);
        }
    };

    const { data, isError } = useQuery({ queryKey: ['data'], queryFn: checkHasShop })

    if (isError) {
        setHasShop(false);
    }


    return hasShop ? (
        <Outlet />
    ) : (
        <Navigate to="/create-shop" state={{ from: location }} replace />
    )
}