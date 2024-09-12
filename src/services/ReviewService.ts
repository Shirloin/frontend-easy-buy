import axios from "axios";

export default class ReviewService {
    static async createReview(rating: number, text: string, productVariant: string, transactionDetail: string) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/review`,
            {
                rating: rating,
                text: text,
                productVariant: productVariant,
                transactionDetail: transactionDetail,
            }, {

            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
}