import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export const GuestRoute = () => {
    const { token } = useAuth()
    const location = useLocation()

    return token ? (
        <Navigate to="/" state={{ from: location }} replace />
    ) : (
        <Outlet />
    )
}