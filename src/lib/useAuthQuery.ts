import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import AuthService from "../services/AuthService";
import ShopService from "../services/ShopService";

export const useValidateToken = () => {
    const { setToken, setUser, setHasShop, setShop } = useAuth();
    const validateToken = async () => {
        try {
            const response = await AuthService.validate_token();
            const user = response?.data?.user;
            setUser(user);
            setShop(user.shop)
            setHasShop(user.shop !== undefined)
            return user
        } catch (error: any) {
            if (error.response.status === 403 || error.response.status === 401) {
                localStorage.removeItem("authentication");
                setToken("");
            }
        }
        return {}
    };
    return useQuery({
        queryKey: ["validateToken"],
        queryFn: validateToken,
    });
}

export const useValidateShop = () => {
    const { setHasShop, setShop, setToken } = useAuth();

    const checkHasShop = async () => {
        try {
            const response = await ShopService.getUserShop();
            const newShop = response.data.shop;
            if (newShop != null) {
                setHasShop(true);
                setShop(newShop);
            }
            return response.data;
        } catch (error: any) {
            setHasShop(false)
            if (error.response.status === 403 || error.response.status === 401) {
                localStorage.removeItem("authentication");
                setToken("");
            }
        }
    };

    return useQuery({
        queryKey: ["checkHasShop"],
        queryFn: checkHasShop,
    });
}