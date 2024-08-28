import { create } from "zustand"
import { IAddress, ICreateAddress } from "../interfaces/IAddress"

type AddressStoreState = {
    address: IAddress
}

type AddressStoreAction = {
    setAddress: (
        filed: keyof IAddress,
        value: string
    ) => void;
    setInitialAddress: (address: IAddress) => void
}

const initialAddress: IAddress = {
    _id: '',
    address: '',
    addressLabel: '',
    receiverName: '',
    receiverPhone: ''
}

export const useEditAddressStore = create<AddressStoreState & AddressStoreAction>((set) => ({
    address: initialAddress,
    setAddress: (field: keyof IAddress, value: string) => {
        set((state) => ({
            address: {
                ...state.address,
                [field]: value,
            },
        }));
    },
    setInitialAddress: (address) => {
        set((state) => ({
            address: address
        }))
    }
}))