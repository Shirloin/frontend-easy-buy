import { IAddress } from "./IAddress"
import { IProduct } from "./IProduct"
import { IProductVariant } from "./IProductVariant"
import { IReview } from "./IReview"
import { IShop } from "./IShop"
import IUser from "./IUser"

export interface ITransactionHeader {
    _id: string
    date: Date
    address: IAddress
    user: IUser
    shop: IShop
    details: ITransactionDetail[]
}

export interface ITransactionDetail {
    _id: string
    quantity: number
    transaction: ITransactionHeader
    product: IProduct
    variant: IProductVariant
    review: IReview
    reviewStatus: boolean
}