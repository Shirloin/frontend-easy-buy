import { useMutation, useQuery } from "@tanstack/react-query"
import CartService from "../services/CartService"
import { ICart } from "../interfaces/ICart"

export function useAddToCart() {
    const addToCart = async ({ variantId, shopId, quantity }: { variantId: string, shopId: string, quantity: number }) => {
        try {
            const response = await CartService.addToCart(variantId, shopId, quantity)
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

export function useGetCart() {
    const fetchData = async () => {
        try {
            const response = await CartService.getCart()
            return response.data.carts as ICart[]
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    return useQuery({
        queryKey: ["getCart"],
        queryFn: fetchData
    })
}

export function useUpdateCartQuantity() {
    const UpdateCartQuantity = async ({ variantId, shopId, quantity }: { variantId: string, shopId: string, quantity: number }) => {
        try {
            const response = await CartService.updateCartQuantity(variantId, shopId, quantity)
            return response.data.message as string
        } catch (error: any) {
            throw new Error(error.response.data.message)
        }
    }
    return useMutation({
        mutationKey: ["updateCartQuantity"],
        mutationFn: UpdateCartQuantity
    })
}