import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { IChatRoom } from "../interfaces/IChatRoom"
import ChatService from "../services/ChatService"

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
export function useGetRoom(shopId: string) {
    const fetchData = async () => {
        try {
            const response = await ChatService.getChatRoom(shopId)
            return response.data.chatRoom as IChatRoom
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    return useQuery({
        queryKey: ["getChatRoom"],
        queryFn: fetchData,
        enabled: !!shopId
    })
}

export function useCreateChatRoom() {
    const createChatRoom = async ({ shopId }: { shopId: string }) => {
        try {
            const response = await ChatService.createChatRoom(shopId)
            return response.data.chatRoom
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    return useMutation({
        mutationKey: ["createChatRoom"],
        mutationFn: createChatRoom
    })
}