import { create } from "zustand";
import { ICreateProduct } from "../interfaces/IProduct";
import { ICreateProductVariant } from "../interfaces/IProductVariant";
import { ICreateProductImage } from "../interfaces/IProductImage";

type CreateProductState = {
  product: ICreateProduct;
  productVariants: ICreateProductVariant[];
  productImages: ICreateProductImage[];
  setProductName: (name: string) => void;
  setProductDescription: (description: string) => void;
  setProductCategory: (category: string) => void;
  addProductVariant: () => void;
  updateProductVariant: (
    index: number,
    filed: keyof ICreateProductVariant,
    value: string | number,
  ) => void;
  removeProductVariant: (index: number) => void;
};

const useProductStore = create<CreateProductState>((set) => ({
  product: {
    name: "",
    description: "",
    category: "",
  },
  productVariants: [],
  productImages: [],
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
        category: category,
      },
    })),
  addProductVariant: () =>
    set((state) => ({
      productVariants: [
        ...state.productVariants,
        {
          name: "",
          price: 0,
          stock: 0,
        },
      ],
    })),
  updateProductVariant: (
    index: number,
    field: keyof ICreateProductVariant,
    value: string | number,
  ) => {
    set((state) => {
      const updatedVariants = [...state.productVariants];
      if (updatedVariants[index]) {
        updatedVariants[index] = { ...updatedVariants[index], [field]: value };
      }
      return { productVariants: updatedVariants };
    });
  },
  removeProductVariant: (index: number) => {
    set((state) => ({
      productVariants: state.productVariants.filter((_, i) => i !== index),
    }));
  },
}));

export default useProductStore;
