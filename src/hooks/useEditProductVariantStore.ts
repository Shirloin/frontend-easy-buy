import create from 'zustand';
import { ICreateProductVariant, IProductVariant } from '../interfaces/IProductVariant';

type VariantType = IProductVariant | ICreateProductVariant;

interface EditProductVariantFormState {
    variants: VariantType[];
    addProductVariant: () => void;
    updateProductVariant: (index: number, field: string, val: any) => void;
    deleteProductVariant: (index: number) => void;
    setProductVariants: (variants: VariantType[]) => void;
    handleSubmit: () => void;
}

export const useEditProductVariantFormStore = create<EditProductVariantFormState>((set, get) => ({
    variants: [],

    addProductVariant: () => set((state) => ({
        variants: [...state.variants, { name: "", price: 0, stock: 0 }]
    })),

    updateProductVariant: (index: number, field: string, val: any) => {
        set((state) => {
            const updatedVariants = [...state.variants];
            updatedVariants[index] = {
                ...updatedVariants[index],
                [field]: field === "price" || field === "stock" ? Number(val) : val
            };
            return { variants: updatedVariants };
        });
    },

    deleteProductVariant: (index: number) => set((state) => ({
        variants: state.variants.filter((_, i) => i !== index)
    })),

    setProductVariants: (variants: VariantType[]) => set({ variants }),

    handleSubmit: () => {
        const state = get();
        console.log(state.variants);
    }
}));
