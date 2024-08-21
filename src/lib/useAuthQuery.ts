import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import AuthService from "../services/AuthService";

export const useValidateToken = () => {
    const { setToken, setUser, setHasShop, setShop } = useAuth();
    const validateToken = async () => {
        try {
            const response = await AuthService.validate_token();
            const user = response?.data?.user;
            setUser(user);
            setShop(user.shop)
            setHasShop(user.shop !== null)
        } catch (error: any) {
            if (error.response.status === 403 || error.response.status === 401) {
                setToken("");
            }
        }
    };
    return useQuery({
        queryKey: ["validateToken"],
        queryFn: validateToken,
    });
}