import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useHandleError } from "../hooks/useHandleError";
import { ICreateReview, IProductRating, IReview } from "../interfaces/IReview";
import ReviewService from "../services/ReviewService";

export function useCreateReview() {
    const queryClient = useQueryClient()
    const handleError = useHandleError()

    const createReview = async ({ rating, text, product, productVariant, transactionDetail }: ICreateReview) => {
        try {
            const response = await ReviewService.createReview(rating, text, product, productVariant, transactionDetail)
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

export function useGetReviewByProduct(productId: string) {
    const handleError = useHandleError()

    const getReviewByProduct = async () => {
        try {
            const response = await ReviewService.getReviewByProduct(productId)
            return response.data.reviews as IReview[]
        } catch (error) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ["getReviewByProduct"],
        queryFn: getReviewByProduct
    })
}

export function useGetProductRating(productId: string) {

    const getProductRating = async () => {
        try {
            const response = await ReviewService.getProductRating(productId)
            const data = response.data
            const res: IProductRating = data
            return res
        } catch (error) {
            console.log(error)
            return
        }
    }
    return useQuery({
        queryKey: ["getProductRating"],
        queryFn: getProductRating
    })
}