import { useMutation, useQuery } from "@tanstack/react-query"
import CartService from "../services/CartService"
import { ICart } from "../interfaces/ICart"
import { ICartItem } from "../interfaces/ICartItem"

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
    const UpdateCartQuantity = async ({ cartId, variantId, quantity }: { cartId: string, variantId: string, quantity: number }) => {
        try {
            const response = await CartService.updateCartQuantity(cartId, variantId, quantity)
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
export function useIncrementCartQuantity() {
    const IncrementCartQuantity = async ({ cartId, variantId }: { cartId: string, variantId: string }) => {
        try {
            const response = await CartService.incrementCartQuantity(cartId, variantId)
            return response.data.cart as ICartItem
        } catch (error: any) {
            throw new Error(error.response.data.message)
        }
    }
    return useMutation({
        mutationKey: ["incrementCartQuantity"],
        mutationFn: IncrementCartQuantity
    })
}
export function useDecrementCartQuantity() {
    const DecrementCartQuantity = async ({ cartId, variantId }: { cartId: string, variantId: string }) => {
        try {
            const response = await CartService.decrementCartQuantity(cartId, variantId)
            return response.data.cart as ICartItem
        } catch (error: any) {
            throw new Error(error.response.data.message)
        }
    }
    return useMutation({
        mutationKey: ["decrementCartQuantity"],
        mutationFn: DecrementCartQuantity
    })
}
