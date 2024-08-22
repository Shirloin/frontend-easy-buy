import { IProductVariant } from "./IProductVariant"
import { IShop } from "./IShop"

export interface ICartItem {
    _id: string
    quantity: number
    product: IProductVariant
    shop: IShop
}