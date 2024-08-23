import { IProductVariant } from "./IProductVariant"

export interface ICartItem {
    _id: string
    quantity: number
    variant: IProductVariant
}