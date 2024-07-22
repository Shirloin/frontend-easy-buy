import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
// import Layout from "../components/Layout"
// import Navbar from "../components/Navbar"

export const ProtectedRoute = () => {
    const { token } = useAuth()
    const location = useLocation()

    return token ? (
            <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}