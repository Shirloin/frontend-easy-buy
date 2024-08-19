import { create } from "zustand";
import { ICreateProduct, IProduct } from "../interfaces/IProduct";
import { ICreateProductVariant, IProductVariant } from "../interfaces/IProductVariant";
import { ICreateProductImage, IProductImage } from "../interfaces/IProductImage";
import { IProductCategory } from "../interfaces/IProductCategory";
import { IShop } from "../interfaces/IShop";

type VariantType = IProductVariant | ICreateProductVariant;
type ImageType = IProductImage | ICreateProductImage;

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
    addProductImage: () => void;
    updateProductImage: (index: number, value: string) => void;
    removeProductImage: (index: number) => void;
};

const useEditProductStore = create<EditProductState>((set) => ({
    product: {
        _id: "",
        name: "",
        description: "",
        productVariants: [],
        productImages: [],
        productCategory: {} as IProductCategory,
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
    addProductImage: () =>
        set((state) => ({
            product: {
                ...state.product,
                productImages: [
                    ...state.product.productImages,
                    {
                        imageUrl: "",
                    } as IProductImage,
                ],
            },
        })),
    updateProductImage: (index: number, value: string) => {
        set((state) => {
            const updatedImages = [...state.product.productImages];
            if (updatedImages[index]) {
                updatedImages[index] = { ...updatedImages[index], imageUrl: value };
            }
            return {
                product: {
                    ...state.product,
                    productImages: updatedImages,
                },
            };
        });
    },
    removeProductImage: (index: number) => {
        set((state) => ({
            product: {
                ...state.product,
                productImages: state.product.productImages.filter((_, i) => i !== index),
            },
        }));
    },
}));

export default useEditProductStore;
