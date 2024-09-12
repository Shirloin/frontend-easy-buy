import { create } from "zustand"
import { ITransactionDetail } from "../interfaces/ITransaction"

type CreateReviewState = {
    order?: ITransactionDetail | null
    rating: number
    text: string
    status: string
}

type CreateReviewAction = {
    setOrder: (order: ITransactionDetail | null) => void
    setRating: (val: number) => void
    setText: (val: string) => void
}

const useCreateReviewStore = create<CreateReviewState & CreateReviewAction>((set) => ({
    rating: 0,
    text: "",
    status: "",
    setOrder: (order) => set(() => ({
        order: order
    })),
    setRating: (val) => {
        let status = ""
        if (val === 5) {
            status = "Very Good!"
        } else if (val === 4) {
            status = "Good!"
        } else if (val === 3) {
            status = "Average!"
        } else if (val === 2) {
            status = "Bad!"
        } else if (val === 1) {
            status = "Very Bad!"
        }
        set(() => ({
            rating: val,
            status: status
        }))
    },
    setText: (val) => set(() => ({
        text: val
    }))
}))
export default useCreateReviewStore