import { ICartItem } from "./ICartItem"
import { IShop } from "./IShop"
import IUser from "./IUser"

export interface ICart {
    _id: string
    user: IUser
    shop: IShop
    items: ICartItem[]
} 