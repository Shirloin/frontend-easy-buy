import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { IAddress, ICreateAddress } from "../interfaces/IAddress"
import AddressService from "../services/AddressService"

export function useCreateAddress() {
    const queryClient = useQueryClient()

    const createAddress = async ({ address }: { address: ICreateAddress }) => {
        try {
            const response = await AddressService.createAddress(address)
            return response.data.message
        } catch (error) {
            throw new Error("Fail To Create Address")
        }
    }
    return useMutation({
        mutationKey: ["createAddress"],
        mutationFn: createAddress,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAddress"] });
        }
    })
}

export function useGetAddress() {
    const fetchData = async () => {
        try {
            const response = await AddressService.getAddress()
            return response.data.addresses as IAddress[]
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    return useQuery({
        queryKey: ["getAddress"],
        queryFn: fetchData
    })
}

export function useUpdateAddress() {
    const updateAddress = async ({ address }: { address: IAddress }) => {
        try {
            const response = await AddressService.updateAddress(address)
            return response.data.message
        } catch (error) {
            throw new Error("Fail To Update Address")
        }
    }
    return useMutation({
        mutationKey: ["updateAddress"],
        mutationFn: updateAddress
    })
}
export function useDeleteAddress() {
    const queryClient = useQueryClient()
    const deleteAddress = async ({ addressId }: { addressId: string }) => {
        try {
            const response = await AddressService.deleteAddress(addressId)
            return response.data.message
        } catch (error) {
            throw new Error("Fail To Delete Address")
        }
    }
    return useMutation({
        mutationKey: ["deleteAddress"],
        mutationFn: deleteAddress,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAddress"] });
        }
    })
}