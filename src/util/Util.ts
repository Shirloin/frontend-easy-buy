import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { IShop } from "../interfaces/IShop";
import IUser from "../interfaces/IUser";
import toast from "react-hot-toast";

export function formatNumber(value: number): string {
    return value.toLocaleString('de-DE');
}

export function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export function isUser(sender: IUser | IShop): sender is IUser {
    return (sender as IUser).username !== undefined;
}

export function isShop(sender: IUser | IShop): sender is IShop {
    return (sender as IShop).name !== undefined;
}
