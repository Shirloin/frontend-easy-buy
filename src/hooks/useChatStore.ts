import { create } from "zustand";
import { IChatRoom } from "../interfaces/IChatRoom";

type ChatStoreState = {
    room?: IChatRoom
}

type ChatStoreAction = {
    setRoom: (room: IChatRoom) => void
}

export const useChatStore = create<ChatStoreState & ChatStoreAction>((set) => ({
    setRoom: (room) => set({
        room: room
    })
}))