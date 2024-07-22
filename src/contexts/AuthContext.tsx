import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import IUser from "../interfaces/IUser";

type AuthContextType = {
    token: string | null
    setToken: (newToken: string) => void
    user: IUser | null,
    setUser: (newUser: IUser) => void
}

const initAuthContextValue: AuthContextType = {
    token: "",
    setToken: () => null,
    user: null,
    setUser: () => null,
}

const AuthContext = createContext<AuthContextType>(initAuthContextValue)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken_] = useState(localStorage.getItem("authentication"))
    const [user, setUser_] = useState<IUser | null>(null)
    const setToken = (newToken: string) => {
        setToken_(newToken)
    }

    const setUser = (newUser: IUser) => {
        setUser_(newUser)
    }

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = "Bearer " + token
            localStorage.setItem('authentication', token)
        } else {
            delete axios.defaults.headers.common['Authorization']
            localStorage.removeItem('authentication')
        }
    }, [token])

    const contextValue = useMemo(
        () => ({
            token, setToken, user, setUser
        }),
        [token]
    )

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}