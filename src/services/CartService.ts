import axios from "axios";

export default class CartService {
    static async addToCart(productId: string, shopId: string, quantity: number) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart/add-to-cart`, {
            productId: productId,
            shopId: shopId,
            quantity: quantity,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
}