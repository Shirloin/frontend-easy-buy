import axios from "axios";

export default class ChatService {
    static async getAllUserChatRoom() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/user-chat-room`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
    static async getAllShopChatRoom() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/shop-chat-room`, {
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
    static async createChat(text: string, senderId: string, chatRoomId: string, type: string) {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/chat`, {
            text: text,
            senderId: senderId,
            chatRoomId: chatRoomId,
            type: type,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }

    static async getChat(chatRoomId: string) {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/chat/${chatRoomId}`, {

            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
}