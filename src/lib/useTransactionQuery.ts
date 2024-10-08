import { useMutation, useQuery } from "@tanstack/react-query"
import TransactionService from "../services/TransactionService"
import { IAddress } from "../interfaces/IAddress"
import { ITransactionHeader } from "../interfaces/ITransaction"
import { useHandleError } from "../hooks/useHandleError"

export function useCreateTransaction() {
    const handleError = useHandleError()
    const createTransaction = async ({ cartIds, address }: { cartIds: string[], address: IAddress }) => {
        try {
            const response = await TransactionService.createTransaction(cartIds, address)
            return response.data.message
        } catch (error: any) {
            handleError(error)
        }
    }
    return useMutation({
        mutationKey: ["createTransaction"],
        mutationFn: createTransaction
    })
}

export function useGetTransactionByShop() {
    const handleError = useHandleError()
    const fetchData = async () => {
        try {
            const response = await TransactionService.getTransactionByShop()
            return response.data.transactions as ITransactionHeader[]
        } catch (error: any) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ["getTransactionByShop"],
        queryFn: fetchData
    })
}
export function useGetTransactionByUser() {
    const handleError = useHandleError()
    const fetchData = async () => {
        try {
            const response = await TransactionService.getTransactionByUser()
            return response.data.transactions as ITransactionHeader[]
        } catch (error: any) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ["getTransactionByUser"],
        queryFn: fetchData
    })
}

export function useGetTransactionWithNoReview() {
    const handleError = useHandleError()
    const fetchData = async () => {
        try {
            const response = await TransactionService.getTransactionWithNoReview()
            return response.data.transactions as ITransactionHeader[]
        } catch (error: any) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ["getTransactionWithNoReview"],
        queryFn: fetchData
    })
}
export function useGetTransactionWithReview() {
    const handleError = useHandleError()
    const fetchData = async () => {
        try {
            const response = await TransactionService.getTransactionWithReview()
            return response.data.transactions as ITransactionHeader[]
        } catch (error: any) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ["getTransactionWithNoReview"],
        queryFn: fetchData
    })
}