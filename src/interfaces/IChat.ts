import { IChatRoom } from "./IChatRoom"
import { IShop } from "./IShop"
import IUser from "./IUser"

export interface IChat {
    _id: string
    text: string
    sender: IUser | IShop
    type: "User" | "Shop"
    chatRoom: IChatRoom
    createdAt: Date
    updatedAt: Date
}

export interface ICreateChat {
    text: string,
    senderId: string
    chatRoomId: string
    type: "User" | "Shop"
}