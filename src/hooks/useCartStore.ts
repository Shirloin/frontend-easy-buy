import { create } from "zustand";
import { ICart } from "../interfaces/ICart";
import { ICartItem } from "../interfaces/ICartItem";

type CartItemState = {
    cartId: string
    itemId: string
    quantity: number
    isSelected: boolean;
}

type CartStoreState = {
    cartItems: CartItemState[]
    initializeCartItems: (carts: ICart[]) => void
    toggleCartSelection: (cartId: string) => void
    toggleItemSelection: (cartId: string, itemId: string) => void
    setQuantity: (cartId: string, itemId: string, quantity: number) => void
    selectAll: (isSelected: boolean) => void
}

export const useCartStore = create<CartStoreState>((set, get) => ({
    cartItems: [],

    initializeCartItems: (carts: ICart[]) => set({
        cartItems: carts.flatMap(cart =>
            cart.items.map(item => ({
                cartId: cart._id,
                itemId: item._id,
                isSelected: false,
                quantity: item.quantity,
            }))
        )
    }),

    toggleCartSelection: (cartId: string) => set((state) => {
        const allSelected = state.cartItems
            .filter(item => item.cartId === cartId)
            .every(item => item.isSelected);

        return {
            cartItems: state.cartItems.map(item =>
                item.cartId === cartId
                    ? { ...item, isSelected: !allSelected }
                    : item
            ),
        };
    }),

    toggleItemSelection: (cartId: string, itemId: string) => set((state) => ({
        cartItems: state.cartItems.map(item =>
            item.cartId === cartId && item.itemId === itemId
                ? { ...item, isSelected: !item.isSelected }
                : item
        ),
    })),

    setQuantity: (cartId: string, itemId: string, quantity: number) => set((state) => ({
        cartItems: state.cartItems.map(item =>
            item.cartId === cartId && item.itemId === itemId
                ? { ...item, quantity }
                : item
        ),
    })),

    selectAll: (isSelected: boolean) => set((state) => ({
        cartItems: state.cartItems.map(item => ({ ...item, isSelected })),
    })),
}));
