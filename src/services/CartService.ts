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

    static async updateCartQuantity(cartId: string, variantId: string, quantity: number) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart/update-quantity`, {
            cartId: cartId,
            variantId: variantId,
            quantity: quantity,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
    static async incrementCartQuantity(cartId: string, variantId: string) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart/increment-quantity`, {
            cartId: cartId,
            variantId: variantId,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
    static async decrementCartQuantity(cartId: string, variantId: string) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart/decrement-quantity`, {
            cartId: cartId,
            variantId: variantId,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }


}