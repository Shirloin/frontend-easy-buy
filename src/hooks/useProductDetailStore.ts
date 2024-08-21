import { create } from "zustand"
import { IProduct } from "../interfaces/IProduct"
import { IProductVariant } from "../interfaces/IProductVariant"

type ProductDetailStoreState = {
    product?: IProduct
    selectedVariantIndex: number
    selectedVariant: IProductVariant
    quantity: number
}

type ProductDetailAction = {
    selectVariant: (index: number, variant: IProductVariant) => void
    setSelectedVariant: (variant: IProductVariant) => void
    setSelectedVariantIndex: (val: number) => void
    addQuantity: () => void
    minusQuantity: () => void
    updateQuantity: (val: number) => void
}

export const useProductDetailStore = create<ProductDetailStoreState & ProductDetailAction>((set) => ({
    selectedVariantIndex: 0,
    selectedVariant: {
        _id: "",
        name: "",
        price: 0,
        stock: 0,
        product: {} as IProduct
    },
    selectVariant: (index: number, variant: IProductVariant) => {
        set((state) => ({
            selectedVariantIndex: index,
            selectedVariant: variant
        }))
    },
    setSelectedVariant: (variant) => {
        set((state) => ({
            selectedVariant: variant
        }))
    },
    setSelectedVariantIndex: (val) => {
        set((state) => ({
            selectedVariantIndex: val
        }))
    },

    quantity: 1,
    addQuantity: () => {
        set((state) => (
            {
                quantity: Math.min(state.quantity + 1, 10)
            }))
    },
    minusQuantity: () => {
        set((state) => ({
            quantity: Math.min(state.quantity - 1, 1)
        }))
    },
    updateQuantity: (val: number) => {
        set((state) => ({
            quantity: val
        }))
    }
}))