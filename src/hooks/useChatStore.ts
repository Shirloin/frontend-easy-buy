import { create } from "zustand";
import { IChatRoom } from "../interfaces/IChatRoom";
import { socket } from "../util/Socket";

type ChatStoreState = {
    room: IChatRoom
}

type ChatStoreAction = {
    setRoom: (room: IChatRoom) => void
}

export const useChatStore = create<ChatStoreState & ChatStoreAction>((set, get) => ({
    room: {} as IChatRoom,
    setRoom: (room) => {
        const { room: settedRoom } = get()
        if (settedRoom) {
            socket.emit("leave_room", settedRoom._id);
        }
        set({
            room: room
        });
        socket.emit("join_room", room._id);
    }
}))