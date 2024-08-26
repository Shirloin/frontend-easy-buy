import axios from "axios";

export default class TransactionService {
    static async createTransaction(cartIds: string[]) {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/transaction/`, {
            cartIds: cartIds,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        });
    }
}