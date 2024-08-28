import { useMutation } from "@tanstack/react-query"
import TransactionService from "../services/TransactionService"
import { IAddress } from "../interfaces/IAddress"

export function useCreateTransaction() {
    const createTransaction = async ({ cartIds, address }: { cartIds: string[], address: IAddress }) => {
        try {
            const response = await TransactionService.createTransaction(cartIds, address)
            return response.data.message
        } catch (error: any) {
            throw new Error(error.response.data.message)
        }
    }
    return useMutation({
        mutationKey: ["createTransaction"],
        mutationFn: createTransaction
    })
}