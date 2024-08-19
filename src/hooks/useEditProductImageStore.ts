import create from 'zustand';
import { ICreateProductImage, IProductImage } from '../interfaces/IProductImage';

type ImageType = IProductImage | ICreateProductImage;

interface EditProductImageState {
    images: ImageType[];
    addProductImage: () => void;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    removeProductImage: (index: number) => void;
    setProductImages: (images: ImageType[]) => void;
    handleSubmit: () => void;
}

export const useEditProductImageStore = create<EditProductImageState>((set, get) => ({
    images: [],

    addProductImage: () => set((state) => ({
        images: [...state.images, { imageUrl: "" }]
    })),

    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const url = reader.result as string;
                console.log(url)
                set((state) => {
                    const updatedImages = [...state.images];
                    updatedImages[index] = { ...updatedImages[index], imageUrl: url };
                    return { images: updatedImages };
                });
            };
            reader.readAsDataURL(file);
        }
    },

    removeProductImage: (index: number) => set((state) => ({
        images: state.images.filter((_, i) => i !== index)
    })),

    setProductImages: (images: ImageType[]) => set({ images }),

    handleSubmit: () => {
        const state = get();
        console.log(state.images);
    }
}));
