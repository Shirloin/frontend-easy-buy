import axios from "axios";

export default class ChatService {
    static async getAllUserChatRoom() {
        return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/chat-room`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authentication"),
            },
        })
    }
}