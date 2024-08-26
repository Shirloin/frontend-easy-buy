import { useMutation } from "@tanstack/react-query"
import TransactionService from "../services/TransactionService"

export function useCreateTransaction() {
    const createTransaction = async ({ cartIds }: { cartIds: string[] }) => {
        try {
            const response = await TransactionService.createTransaction(cartIds)
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