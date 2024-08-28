import { useMutation, useQuery } from "@tanstack/react-query"
import TransactionService from "../services/TransactionService"
import { IAddress } from "../interfaces/IAddress"
import { ITransactionHeader } from "../interfaces/ITransaction"

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

export function useGetTransactionByShop() {
    const fetchData = async () => {
        try {
            const response = await TransactionService.getTransactionByShop()
            return response.data.transactions as ITransactionHeader[]
        } catch (error: any) {
            throw new Error(error.response.data.message)
        }
    }
    return useQuery({
        queryKey: ["getTransactionByShop"],
        queryFn: fetchData
    })
}