import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { IAddress, ICreateAddress } from "../interfaces/IAddress"
import AddressService from "../services/AddressService"
import { useHandleError } from "../hooks/useHandleError";

export function useCreateAddress() {
    const queryClient = useQueryClient()
    const handleError = useHandleError();

    const createAddress = async ({ address }: { address: ICreateAddress }) => {
        try {
            const response = await AddressService.createAddress(address)
            return response.data.message
        } catch (error: any) {
            handleError(error)
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
    const handleError = useHandleError();
    const fetchData = async () => {
        try {
            const response = await AddressService.getAddress()
            return response.data.addresses as IAddress[]
        } catch (error: any) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ["getAddress"],
        queryFn: fetchData
    })
}

export function useUpdateAddress() {
    const queryClient = useQueryClient()
    const handleError = useHandleError();
    const updateAddress = async ({ address }: { address: IAddress }) => {
        try {
            const response = await AddressService.updateAddress(address)
            return response.data.message
        } catch (error) {
            handleError(error)
        }
    }
    return useMutation({
        mutationKey: ["updateAddress"],
        mutationFn: updateAddress,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAddress"] });
        }
    })
}
export function useDeleteAddress() {
    const queryClient = useQueryClient()
    const handleError = useHandleError();
    const deleteAddress = async ({ addressId }: { addressId: string }) => {
        try {
            const response = await AddressService.deleteAddress(addressId)
            return response.data.message
        } catch (error) {
            handleError(error)
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