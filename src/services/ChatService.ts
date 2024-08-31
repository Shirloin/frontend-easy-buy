import axios from "axios";

export default class ChatService {
    static async getAllUserChatRoom() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/user-chat-room`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
    static async getChatRoom(shopId: string) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/chat-room`, {
            data: {
                shopId: shopId
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
    static async createChatRoom(shopId: string) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/chat-room`, {
            shopId: shopId,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
}