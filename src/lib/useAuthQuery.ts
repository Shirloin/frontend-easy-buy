import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import AuthService from "../services/AuthService";
import ShopService from "../services/ShopService";
import { useHandleError } from "../hooks/useHandleError";

export const useValidateToken = () => {
    const { setUser, setHasShop, setShop, logOut } = useAuth();
    const handleError = useHandleError();
    const validateToken = async () => {
        try {
            const response = await AuthService.validate_token();
            const user = response?.data?.user;
            setUser(user);
            setShop(user.shop)
            setHasShop(user.shop !== undefined)
            return user
        } catch (error: any) {
            logOut()
            handleError(error)
        }
        return {}
    };
    return useQuery({
        queryKey: ["validateToken"],
        queryFn: validateToken,
    });
}

export const useValidateShop = () => {
    const { setHasShop, setShop } = useAuth();
    const handleError = useHandleError();

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
            handleError(error)
        }
    };

    return useQuery({
        queryKey: ["checkHasShop"],
        queryFn: checkHasShop,
    });
}