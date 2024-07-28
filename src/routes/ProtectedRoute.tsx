import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react"
import AuthService from "../services/AuthService"
import { useQuery } from "@tanstack/react-query"

export const ProtectedRoute = () => {
    const { isAuthenticated, token, setToken, hasShop } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const validateToken = async () => {
        try {
            const response = await AuthService.validate_token()
            return response.data
        } catch (error: any) {
            if (error.response.status === 403 || error.response.status === 401) {
                const logOutResponse = await AuthService.logOut()
                setToken("")
                navigate('/login')
            }
        }
    }
    const { data, isError } = useQuery({ queryKey: ['data'], queryFn: validateToken })

    if (isError) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    if (location.pathname === "/create-shop" && hasShop) {
        return <Navigate to="/seller" state={{ from: location }} replace />
    }

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}