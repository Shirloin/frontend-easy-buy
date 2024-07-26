import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import IUser from "../interfaces/IUser";
import AuthService from "../services/AuthService";

type AuthContextType = {
    token: string | null
    setToken: (newToken: string) => void
    user: IUser | null,
    setUser: (newUser: IUser) => void
    isAuthenticated: boolean
    isLoading: boolean
    setIsLoading: (val: boolean) => void
}

const initAuthContextValue: AuthContextType = {
    token: "",
    setToken: () => null,
    user: null,
    setUser: () => null,
    isAuthenticated: false,
    isLoading: false,
    setIsLoading: () => null
}

const AuthContext = createContext<AuthContextType>(initAuthContextValue)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const initialToken = localStorage.getItem("authentication");
    const [token, setToken_] = useState<string | null>(initialToken)
    const [user, setUser_] = useState<IUser | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!initialToken)
    const [isLoading, setIsLoading] = useState(false)
    const setToken = (newToken: string) => {
        setToken_(newToken)
    }

    const setUser = (newUser: IUser) => {
        setUser_(newUser)
    }

    useEffect(() => {
        if (token) {
            setIsAuthenticated(true)
            axios.defaults.headers.common['Authorization'] = "Bearer " + token
            localStorage.setItem('authentication', token)
        } else {
            setIsAuthenticated(false)
            delete axios.defaults.headers.common['Authorization']
            localStorage.removeItem('authentication')
        }
    }, [token])

    const contextValue = useMemo(
        () => ({
            token, setToken, user, setUser, isAuthenticated, isLoading, setIsLoading
        }),
        [token, user, isAuthenticated, isLoading]
    )

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}