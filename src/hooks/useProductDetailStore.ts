import { create } from "zustand"
import { IProduct } from "../interfaces/IProduct"
import { IProductVariant } from "../interfaces/IProductVariant"
import { IProductCategory } from "../interfaces/IProductCategory"
import { IProductImage } from "../interfaces/IProductImage"
import { IShop } from "../interfaces/IShop"

type ProductDetailStoreState = {
    product: IProduct
    selectedVariantIndex: number
    selectedVariant: IProductVariant
    quantity: number
}

type ProductDetailAction = {
    setProduct: (product: IProduct) => void
    selectVariant: (index: number, variant: IProductVariant) => void
    setSelectedVariant: (variant: IProductVariant) => void
    setSelectedVariantIndex: (val: number) => void
    addQuantity: () => void
    minusQuantity: () => void
    updateQuantity: (val: number) => void
}

export const useProductDetailStore = create<ProductDetailStoreState & ProductDetailAction>((set, get) => ({
    product: {
        _id: "",
        name: "",
        description: "",
        productCategory: {} as IProductCategory,
        productImages: [] as IProductImage[],
        productVariants: [] as IProductVariant[],
        shop: {} as IShop
    },
    setProduct: (product) => {
        set((state) => ({
            product: product
        }))
    },
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
            selectedVariant: variant,
            quantity: 1
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
                quantity: state.quantity + 1
            }))
    },
    minusQuantity: () => {
        set((state) => ({
            quantity: Math.max(state.quantity - 1, 1)
        }))
    },
    updateQuantity: (val: number) => {
        set((state) => ({
            quantity: val
        }))
    },
}))