import { IProduct } from "./IProduct"
import { IProductVariant } from "./IProductVariant"
import { ITransactionDetail } from "./ITransaction"
import IUser from "./IUser"

export interface IReview {
    _id: string
    rating: number
    text: string
    product: IProduct
    productVariant: IProductVariant
    transactionDetail: ITransactionDetail
    creator: IUser
    createdAt: Date
    updatedAt: Date
}

export interface ICreateReview {
    rating: number
    text: string
    product: string
    productVariant: string
    transactionDetail: string
}


export interface IProductRating {
    averageRating: number
    userCount: number
}