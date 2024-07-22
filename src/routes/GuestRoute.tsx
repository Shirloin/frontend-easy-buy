import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export const GuestRoute = () => {
    const { isAuthenticated } = useAuth()
    const location = useLocation()

    return isAuthenticated ? (
        <Navigate to="/" state={{ from: location }} replace />
    ) : (
        <Outlet />
    )
}