import { IChatRoom } from "./IChatRoom"
import { IShop } from "./IShop"
import IUser from "./IUser"

export interface IChat extends Document {
    _id: string
    text: string
    sender: IUser | IShop
    chatRoom: IChatRoom
    createdAt: Date
    updatedAt: Date
}