import { IChatRoom } from "../../interfaces/IChatRoom";
import ChatCard from "../cards/ChatCard";

interface ChatListSectionProps {
  rooms?: IChatRoom[];
}

export default function ChatListSection({
  rooms = [] as IChatRoom[],
}: ChatListSectionProps) {
  return (
    <>
      <div className="flex w-80 flex-col overflow-auto border-r-2">
        <div className="max-h-full overflow-y-auto">
          {rooms.map((room) => (
            <ChatCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </>
  );
}
