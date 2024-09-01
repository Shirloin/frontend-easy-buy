import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import IUser from "../interfaces/IUser";
import { IShop } from "../interfaces/IShop";

type AuthContextType = {
  token: string | null;
  setToken: (newToken: string) => void;
  user: IUser | null;
  setUser: (newUser: IUser) => void;
  setShop: (newShop: IShop | null | undefined) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
  hasShop: boolean;
  setHasShop: (val: boolean) => void;
  logOut: () => void;
};

const initAuthContextValue: AuthContextType = {
  token: "",
  setToken: () => null,
  user: null,
  setUser: () => null,
  setShop: () => null,
  isAuthenticated: false,
  isLoading: false,
  setIsLoading: () => null,
  hasShop: false,
  setHasShop: () => null,
  logOut: () => null,
};

const AuthContext = createContext<AuthContextType>(initAuthContextValue);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initialToken = localStorage.getItem("authentication");
  const [token, setToken_] = useState<string | null>(initialToken);
  const [user, setUser_] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(!!initialToken);
  const [isLoading, setIsLoading] = useState(false);
  const [hasShop, setHasShop_] = useState<boolean>(user?.shop !== null);
  const setToken = (newToken: string) => {
    setToken_(newToken);
  };

  const setUser = (newUser: IUser) => {
    setUser_(newUser);
    setHasShop_(!!newUser.shop);
  };

  const setShop = (newShop: IShop | null | undefined) => {
    if (user) {
      const updatedUser = { ...user, shop: newShop };
      setUser_(updatedUser);
      setHasShop_(!!newShop);
    }
  };

  const logOut = () => {
    localStorage.removeItem("authentication");
    setToken("");
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      setIsAuthenticated(true);
      setHasShop_(user?.shop !== null);
      localStorage.setItem("authentication", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      setIsAuthenticated(false);
      setHasShop_(false);
      localStorage.removeItem("authentication");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
      isAuthenticated,
      isLoading,
      setIsLoading,
      hasShop,
      setHasShop: setHasShop_,
      setShop,
      logOut,
    }),
    [token, user, isAuthenticated, isLoading, hasShop, setShop, logOut],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
