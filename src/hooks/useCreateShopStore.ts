import { create } from "zustand";
import { ICreateShop, IShop } from "../interfaces/IShop";
import { ChangeEvent } from "react";

type CreateShopState = {
    shop: ICreateShop
}

type CreateShopAction = {
    setName: (val: string) => void
    setDescription: (val: string) => void
    setBannerImage: (val: string) => void
    setShopImage: (val: string) => void
}

const initialShop = {
    name: "",
    description: "",
    bannerUrl: "https://plus.unsplash.com/premium_photo-1670738772747-c81429db3725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
}

const useCreateShopStore = create<CreateShopState & CreateShopAction>((set) => ({
    shop: initialShop,
    setName: (val) => set((state) => ({
        shop: {
            ...state.shop,
            name: val
        }
    })),
    setDescription: (val) => set((state) => ({
        shop: {
            ...state.shop,
            description: val
        }
    })),
    setBannerImage: (val) => set((state) => ({
        shop: {
            ...state.shop,
            bannerUrl: val
        }
    })),
    setShopImage: (val) => set((state) => ({
        shop: {
            ...state.shop,
            imageUrl: val
        }
    })),
}))

export default useCreateShopStore