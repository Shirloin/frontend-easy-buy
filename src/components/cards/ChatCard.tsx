import { useChatStore } from "../../hooks/useChatStore";
import { IChatRoom } from "../../interfaces/IChatRoom";
import { socket } from "../../util/Socket";

interface ChatCardProps {
  room: IChatRoom;
  state: "User" | "Shop";
}

export default function ChatCard({ room, state }: ChatCardProps) {
  const { setRoom } = useChatStore();
  const joinRoom = () => {
    setRoom(room);
  };
  return (
    <>
      <button
        onClick={joinRoom}
        className="flex w-full items-center justify-start gap-2 rounded-xl border-b p-4 hover:bg-gray-200"
      >
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img
              src={state === "User" ? room.shop.imageUrl : room.user.imageUrl}
            />
          </div>
        </div>
        <p className="text-xs font-bold">
          {state === "User" ? room.shop.name : room.user.username}
        </p>
      </button>
    </>
  );
}
