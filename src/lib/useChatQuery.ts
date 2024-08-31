import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { IChatRoom } from "../interfaces/IChatRoom"
import ChatService from "../services/ChatService"
import { IChat, ICreateChat } from "../interfaces/IChat"

export function useGetAllUserChatRoom() {
    const fetchData = async () => {
        try {
            const response = await ChatService.getAllUserChatRoom()
            return response.data.chatRooms as IChatRoom[]
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    return useQuery({
        queryKey: ["getAllUserChatRoom"],
        queryFn: fetchData
    })
}
export function useGetAllShopChatRoom() {
    const fetchData = async () => {
        try {
            const response = await ChatService.getAllShopChatRoom()
            return response.data.chatRooms as IChatRoom[]
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    return useQuery({
        queryKey: ["getAllShopChatRoom"],
        queryFn: fetchData
    })
}

export function useCreateChatRoom() {
    const createChatRoom = async ({ shopId }: { shopId: string }) => {
        try {
            const response = await ChatService.createChatRoom(shopId)
            return response.data.chatRoom as IChatRoom
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    return useMutation({
        mutationKey: ["createChatRoom"],
        mutationFn: createChatRoom
    })
}
export function useCreateChat() {
    const createChat = async ({ text, senderId, chatRoomId, type }: ICreateChat) => {
        try {
            const response = await ChatService.createChat(text, senderId, chatRoomId, type)
            return response.data.chat as IChat
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    return useMutation({
        mutationKey: ["createChat"],
        mutationFn: createChat
    })
}

export function useGetChat(chatRoomId: string) {
    const fetchData = async () => {
        try {
            const response = await ChatService.getChat(chatRoomId)
            return response.data.chats as IChat[]
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    return useQuery({
        queryKey: ["getChat"],
        queryFn: fetchData,
    })
}