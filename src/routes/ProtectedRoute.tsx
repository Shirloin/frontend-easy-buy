import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react"
import AuthService from "../services/AuthService"

export const ProtectedRoute = () => {
    const { isAuthenticated, token, setToken, hasShop } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const validateToken = async () => {
            try {
                const response = await AuthService.validate_token()
            } catch (error: any) {
                if (error.response.status === 403) {
                    const logOutResponse = await AuthService.logOut()
                    setToken("")
                    navigate('/login')
                }
            }
        }
        validateToken()
    }, [])
    if (location.pathname === "/create-shop" && hasShop) {
        return <Navigate to="/seller" state={{ from: location }} replace />
    }

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}