import { create } from "zustand"
import { IAddress } from "../interfaces/IAddress"
import { ICart } from "../interfaces/ICart"

type ShipmentStoreState = {
    address: IAddress | null
    carts: ICart[] | null
}

type ShipmentStoreAction = {
    setAddress: (address: IAddress) => void
    setCarts: (carts: ICart[]) => void
}

export const useShipmentStore = create<ShipmentStoreAction & ShipmentStoreState>((set) => ({
    address: null,
    setAddress: (address) => {
        set((state) => ({
            address: address
        }))
    },
    carts: null,
    setCarts: (carts) => {
        set((state) => ({
            carts: carts
        }))
    },
}))