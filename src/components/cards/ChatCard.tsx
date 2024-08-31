import { IChatRoom } from "../../interfaces/IChatRoom";
import { socket } from "../../util/Socket";

interface ChatCardProps {
  room: IChatRoom;
}

export default function ChatCard({ room }: ChatCardProps) {
  const joinRoom = () => {
    socket.emit("join_room", room._id);
  };
  console.log(room);
  return (
    <>
      <button
        onClick={joinRoom}
        className="flex w-full items-center justify-start gap-2 rounded-xl border-b p-4 hover:bg-gray-200"
      >
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={room.shop.imageUrl} />
          </div>
        </div>
        <p className="text-xs font-bold">{room.shop.name}</p>
      </button>
    </>
  );
}
