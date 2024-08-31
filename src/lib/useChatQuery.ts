import { useQuery } from "@tanstack/react-query"
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