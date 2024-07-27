import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import IUser from "../interfaces/IUser";
import { IShop } from "../interfaces/IShop";

type AuthContextType = {
    token: string | null
    setToken: (newToken: string) => void
    user: IUser | null,
    setUser: (newUser: IUser) => void
    shop: IShop | null | undefined,
    setShop: (newShop: IShop | null | undefined) => void
    isAuthenticated: boolean
    isLoading: boolean
    setIsLoading: (val: boolean) => void
    hasShop: boolean
    setHasShop: (val: boolean) => void
}

const initAuthContextValue: AuthContextType = {
    token: "",
    setToken: () => null,
    user: null,
    setUser: () => null,
    shop: null,
    setShop: () => null,
    isAuthenticated: false,
    isLoading: false,
    setIsLoading: () => null,
    hasShop: false,
    setHasShop: () => null
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
    const [hasShop, setHasShop] = useState<boolean>(user?.shop !== null)
    const [shop, setShop] = useState<IShop | null | undefined>(user?.shop)
    const setToken = (newToken: string) => {
        setToken_(newToken)
    }

    const setUser = (newUser: IUser) => {
        setUser_(newUser)
    }

    useEffect(() => {
        if (token) {
            setIsAuthenticated(true)
            setHasShop(user?.shop !== null)
            axios.defaults.headers.common['Authorization'] = "Bearer " + token
            localStorage.setItem('authentication', token)
        } else {
            setIsAuthenticated(false)
            setHasShop(false)
            delete axios.defaults.headers.common['Authorization']
            localStorage.removeItem('authentication')
        }
    }, [token])

    const contextValue = useMemo(
        () => ({
            token, setToken, user, setUser, isAuthenticated, isLoading, setIsLoading, hasShop, setHasShop, shop, setShop
        }),
        [token, user, isAuthenticated, isLoading, hasShop, shop]
    )

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}