import { IChat } from "./IChat"
import { IShop } from "./IShop"
import IUser from "./IUser"

export interface IChatRoom extends Document {
    _id: string
    user: IUser
    shop: IShop
    chats: IChat[]
}