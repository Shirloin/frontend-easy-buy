import { ICartItem } from "./ICartItem"
import IUser from "./IUser"

export interface ICart {
    _id: string
    user: IUser
    items: ICartItem[]
} 