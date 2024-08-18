import create from 'zustand';
import { IProduct } from '../interfaces/IProduct';

interface EditProductDetailState {
    name: string;
    description: string;
    category: string;
    setName: (name: string) => void;
    setDescription: (description: string) => void;
    setCategory: (category: string) => void;
    setProduct: (product: IProduct) => void;
    handleSubmit: () => void;
}

export const useEditProductDetailStore = create<EditProductDetailState>((set, get) => ({
    name: '',
    description: '',
    category: '',
    setName: (name) => set({ name }),
    setDescription: (description) => set({ description }),
    setCategory: (category) => set({ category }),
    setProduct: (product: IProduct) => set({
        name: product.name,
        description: product.description,
        category: product.productCategory.name,
    }),
    handleSubmit: () => {
        const state = get();
        console.log({ name: state.name, description: state.description, category: state.category });
    }
}));
