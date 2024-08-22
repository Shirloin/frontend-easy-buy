import { useMutation, useQuery } from "@tanstack/react-query"
import CartService from "../services/CartService"

export function useAddToCart() {
    const addToCart = async ({ productId, shopId, quantity }: { productId: string, shopId: string, quantity: number }) => {
        try {
            const response = await CartService.addToCart(productId, shopId, quantity)
            return response.data.message
        } catch (error) {
            throw new Error("Fail To Add To Cart")
        }
    }
    return useMutation({
        mutationKey: ["addToCart"],
        mutationFn: addToCart
    })
}