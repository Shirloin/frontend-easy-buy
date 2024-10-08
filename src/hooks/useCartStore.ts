import { create } from "zustand";
import { ICart } from "../interfaces/ICart";
import { ICartItem } from "../interfaces/ICartItem";

type CartItemState = {
    cart: ICart
    item: ICartItem
    price: number
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
    incrementCartItem: (cartId: string, itemId: string) => void
    decrementCartItem: (cartId: string, itemId: string) => void
    removeCartItem: (cartId: string, itemId: string) => void
    removeSelectedCartItems: () => void;
}

export const useCartStore = create<CartStoreState>((set) => ({
    cartItems: [],
    totalPrice: 0,
    initializeCartItems: (carts: ICart[]) => set({
        cartItems: carts.flatMap(cart =>
            cart.items.map(item => ({
                cart: cart,
                item: item,
                price: item.variant.price,
                isSelected: false,
                quantity: item.quantity,
            }))
        )
    }),
    toggleCartSelection: (cartId: string) => {
        set((state) => {
            const allSelected = state.cartItems
                .filter(item => item.cart._id === cartId)
                .every(item => item.isSelected);

            const updatedCartItems = state.cartItems.map(item =>
                item.cart._id === cartId
                    ? { ...item, isSelected: !allSelected }
                    : item
            );

            return { cartItems: updatedCartItems };
        });
    },

    toggleItemSelection: (cartId: string, itemId: string) => {
        set((state) => ({
            cartItems: state.cartItems.map(item =>
                item.cart._id === cartId && item.item._id === itemId
                    ? { ...item, isSelected: !item.isSelected }
                    : item
            ),
        }));
    },

    setQuantity: (cartId: string, itemId: string, quantity: number) => {
        set((state) => ({
            cartItems: state.cartItems.map(item =>
                item.cart._id === cartId && item.item._id === itemId
                    ? { ...item, quantity: quantity }
                    : item
            ),
        }));
    },

    selectAll: (isSelected: boolean) => {
        set((state) => ({
            cartItems: state.cartItems.map(item => ({ ...item, isSelected })),
        }));
    },

    incrementCartItem: (cartId: string, itemId: string) => {
        set((state) => ({
            cartItems: state.cartItems.map(item =>
                item.cart._id === cartId && item.item._id === itemId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        }));
    },
    decrementCartItem: (cartId: string, itemId: string) => {
        set((state) => ({
            cartItems: state.cartItems.map(item =>
                item.cart._id === cartId && item.item._id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ),
        }));
    },
    removeCartItem: (cartId: string, itemId: string) => {
        set((state) => {
            const updatedCartItems = state.cartItems.filter(item =>
                !(item.cart._id === cartId && item.item._id === itemId)
            );

            return { cartItems: updatedCartItems };
        });
    },
    removeSelectedCartItems: () => {
        set((state) => {
            const updatedCartItems = state.cartItems.filter(item => !item.isSelected);

            return { cartItems: updatedCartItems };
        });
    },
}));
