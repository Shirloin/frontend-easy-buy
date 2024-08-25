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

    static async updateCartQuantity(cartItemId: string, quantity: number) {
        return axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/cart/update-quantity`, {
            cartItemId: cartItemId,
            quantity: quantity,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
    static async incrementCartQuantity(cartItemId: string) {
        return axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/cart/${cartItemId}/increment-quantity`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
    static async decrementCartQuantity(cartItemId: string) {
        return axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/cart/${cartItemId}/decrement-quantity`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }

    static async deleteCartItem(cartItemId: string) {
        return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/cart/${cartItemId}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }


}