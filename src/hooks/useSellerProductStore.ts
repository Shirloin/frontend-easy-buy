import { create } from "zustand";
import { IProduct } from "../interfaces/IProduct";

type SellerProductStoreState = {
    products: IProduct[];
    filteredProducts: IProduct[];
    searchQuery: string;
};

type SellerProductStoreAction = {
    setProducts: (products: IProduct[]) => void;
    filter: (val: string) => void;
};

export const useSellerProductStore = create<SellerProductStoreState & SellerProductStoreAction>((set) => ({
    products: [],
    filteredProducts: [],
    searchQuery: "",
    setProducts: (products) => set(() => ({
        products,
        filteredProducts: products,
    })),
    filter: (searchQuery) => set((state) => ({
        searchQuery,
        filteredProducts: state.products.filter((product: IProduct) =>
            [
                product.name,
                product.description,
                product.productCategory.name
            ]
                .some((field) =>
                    field.toLocaleLowerCase().includes(searchQuery.toLowerCase())
                )
        ),
    })),
}));
