import { IProductVariant } from "./IProductVariant"
import { ITransactionDetail } from "./ITransaction"
import IUser from "./IUser"

export interface IReview {
    rating: number
    text: string
    productVariant: IProductVariant
    transactionDetail: ITransactionDetail
    creator: IUser

}

export interface ICreateReview {
    rating: number
    text: string
    productVariant: string
    transactionDetail: string
}