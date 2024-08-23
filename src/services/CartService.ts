import axios from "axios";

export default class CartService {
    static async addToCart(variantId: string, shopId: string, quantity: number) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart/add-to-cart`, {
            variantId: variantId,
            shopId: shopId,
            quantity: quantity,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
    static async getCart() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/cart`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }


}