import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useHandleError } from "../hooks/useHandleError";
import { ICreateReview } from "../interfaces/IReview";
import ReviewService from "../services/ReviewService";

export function useCreateReview() {
    const queryClient = useQueryClient()
    const handleError = useHandleError()

    const createReview = async ({ rating, text, productVariant, transactionDetail }: ICreateReview) => {
        try {
            const response = await ReviewService.createReview(rating, text, productVariant, transactionDetail)
            return response.data.message
        } catch (error) {
            handleError(error)
        }
    }
    return useMutation({
        mutationKey: ["createReview"],
        mutationFn: createReview,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getTransactionWithNoReview"] });
        }
    })
}