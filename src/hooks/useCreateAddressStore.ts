import { create } from "zustand"
import { ICreateAddress } from "../interfaces/IAddress"

type AddressStoreState = {
    address: ICreateAddress
}

type AddressStoreAction = {
    setAddress: (
        filed: keyof ICreateAddress,
        value: string
    ) => void;
}

const initialAddress: ICreateAddress = {
    address: '',
    addressLabel: '',
    receiverName: '',
    receiverPhone: ''
}

export const useCreateAddressStore = create<AddressStoreState & AddressStoreAction>((set) => ({
    address: initialAddress,
    setAddress: (field: keyof ICreateAddress, value: string) => {
        set((state) => ({
            address: {
                ...state.address,
                [field]: value,
            },
        }));
    }
}))