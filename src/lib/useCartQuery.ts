import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import CartService from "../services/CartService"
import { ICart } from "../interfaces/ICart"
import { ICartItem } from "../interfaces/ICartItem"
import { useHandleError } from "../hooks/useHandleError";

export function useAddToCart() {
    const handleError = useHandleError();

    const addToCart = async ({ variantId, shopId, quantity }: { variantId: string, shopId: string, quantity: number }) => {
        try {
            const response = await CartService.addToCart(variantId, shopId, quantity)
            return response.data.message
        } catch (error) {
            console.log(error)
            handleError(error)
        }
    }
    return useMutation({
        mutationKey: ["addToCart"],
        mutationFn: addToCart
    })
}

export function useGetCart() {
    const handleError = useHandleError();

    const fetchData = async () => {
        try {
            const response = await CartService.getCart()
            return response.data.carts as ICart[]
        } catch (error: any) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ["getCart"],
        queryFn: fetchData
    })
}

export function useUpdateCartQuantity() {

    const UpdateCartQuantity = async ({ cartItemId, quantity }: { cartItemId: string, quantity: number }) => {
        try {
            const response = await CartService.updateCartQuantity(cartItemId, quantity)
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

    const IncrementCartQuantity = async ({ cartItemId }: { cartItemId: string }) => {
        try {
            const response = await CartService.incrementCartQuantity(cartItemId)
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

    const DecrementCartQuantity = async ({ cartItemId }: { cartItemId: string }) => {
        try {
            const response = await CartService.decrementCartQuantity(cartItemId)
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
export function useDeleteCartItem() {
    const queryClient = useQueryClient()
    const handleError = useHandleError();

    const deleteCartItem = async ({ cartItemId }: { cartItemId: string }) => {
        try {
            const response = await CartService.deleteCartItem(cartItemId)
            return response.data.message as string
        } catch (error: any) {
            handleError(error)
        }
    }
    return useMutation({
        mutationKey: ["deleteCartItem"],
        mutationFn: deleteCartItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getCart"] });
        }
    })
}
export function useDeleteCartItems() {
    const queryClient = useQueryClient()
    const handleError = useHandleError();

    const deleteCartItems = async ({ cartItemIds }: { cartItemIds: string[] }) => {
        try {
            const response = await CartService.deleteCartItems(cartItemIds)
            return response.data.message as string
        } catch (error: any) {
            handleError(error)
        }
    }
    return useMutation({
        mutationKey: ["deleteCartItems"],
        mutationFn: deleteCartItems,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getCart"] });
        }
    })
}