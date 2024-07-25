import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export const GuestRoute = () => {
    const { isAuthenticated } = useAuth()
    const location = useLocation()

    const from = location.state?.from || "/";

    return isAuthenticated ? (
        <Navigate to={from} state={{ from: location }} replace />
    ) : (
        <Outlet />
    )
}