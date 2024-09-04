import { create } from "zustand";
import { IProduct } from "../interfaces/IProduct";
import { ICreateProductVariant, IProductVariant } from "../interfaces/IProductVariant";
import { IProductCategory } from "../interfaces/IProductCategory";
import { IShop } from "../interfaces/IShop";

type VariantType = IProductVariant | ICreateProductVariant;

type EditProductState = {
    product: IProduct;
    setProduct: (product: IProduct) => void;
    setProductName: (name: string) => void;
    setProductDescription: (description: string) => void;
    setProductCategory: (category: string) => void;
    addProductVariant: () => void;
    updateProductVariant: (
        index: number,
        field: keyof VariantType,
        value: string | number,
    ) => void;
    removeProductVariant: (index: number) => void;
};

const useEditProductStore = create<EditProductState>((set) => ({
    product: {
        _id: "",
        name: "",
        description: "",
        productVariants: [],
        productImages: [],
        productCategory: { name: "" } as IProductCategory,
        shop: {} as IShop
    },
    setProduct: (product: IProduct) => set({ product }),
    setProductName: (name: string) =>
        set((state) => ({
            product: {
                ...state.product,
                name,
            },
        })),
    setProductDescription: (description: string) =>
        set((state) => ({
            product: {
                ...state.product,
                description,
            },
        })),
    setProductCategory: (category: string) =>
        set((state) => ({
            product: {
                ...state.product,
                productCategory: {
                    ...state.product.productCategory,
                    name: category,
                },
            },
        })),
    addProductVariant: () =>
        set((state) => ({
            product: {
                ...state.product,
                productVariants: [
                    ...state.product.productVariants,
                    {
                        name: "",
                        price: 0,
                        stock: 0,
                    } as IProductVariant,
                ],
            },
        })),
    updateProductVariant: (
        index: number,
        field: keyof ICreateProductVariant,
        value: string | number,
    ) => {
        set((state) => {
            const updatedVariants = [...state.product.productVariants];
            if (updatedVariants[index]) {
                updatedVariants[index] = { ...updatedVariants[index], [field]: value };
            }
            return {
                product: {
                    ...state.product,
                    productVariants: updatedVariants,
                },
            };
        });
    },
    removeProductVariant: (index: number) => {
        set((state) => ({
            product: {
                ...state.product,
                productVariants: state.product.productVariants.filter((_, i) => i !== index),
            },
        }));
    },
}));

export default useEditProductStore;
