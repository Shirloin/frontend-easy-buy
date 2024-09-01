import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";

export const useHandleError = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    const handleError = (error: any) => {
        console.log(error)
        if (error.response && (error.response.status === 403 || error.response.status === 401)) {
            logOut();
            navigate("/login");
        } else {
            toast.error(error.response.data.message);
        }
    };

    return handleError;
};