import axios from "axios";
import { IAddress } from "../interfaces/IAddress";

export default class TransactionService {
    static async createTransaction(cartIds: string[], address: IAddress) {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/transaction/`, {
            cartIds: cartIds,
            address: address,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        });
    }
    static async getTransactionByShop() {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/transaction/shop/`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        });
    }
    static async getTransactionByUser() {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/transaction/`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        });
    }
}