import axios from "axios";
import { IAddress, ICreateAddress } from "../interfaces/IAddress";

export default class AddressService {
    static createAddress(address: ICreateAddress) {
        return axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/address`,
            {
                address: address,
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authentication"),
                },
            },
        );
    }
    static getAddress() {
        return axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/address`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authentication"),
                },
            },
        );
    }

    static updateAddress(address: IAddress) {
        return axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/address`,
            {
                address: address,
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authentication"),
                },
            },
        );
    }
    static deleteAddress(addressId: string) {
        return axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/address/${addressId}`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authentication"),
                },
            },
        );
    }
}