import axios from "axios";

export default class ReviewService {
    static async createReview(rating: number, text: string, product: string, productVariant: string, transactionDetail: string) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/review`,
            {
                rating: rating,
                text: text,
                product: product,
                productVariant: productVariant,
                transactionDetail: transactionDetail,
            }, {

            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
    static async getReviewByProduct(productId: string) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/review/product/${productId}`)
    }
    static async getProductRating(productId: string) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/review/rating/product/${productId}`)
    }
}