import { IChat } from "../../interfaces/IChat";
import { isShop, isUser } from "../../util/Util";

interface ChatBubbleStart {
  chat: IChat;
}
export default function ChatBubbleStart({ chat }: ChatBubbleStart) {
  return (
    <>
      <div className="chat chat-start">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={chat.sender.imageUrl}
            />
          </div>
        </div>
        <div className="chat-header">
          {isUser(chat.sender)
            ? chat.sender.username
            : isShop(chat.sender)
              ? chat.sender.name
              : ""}
          <time className="text-xs opacity-50">
            {/* {chat.createdAt.toISOString()} */}
          </time>
        </div>
        <div className="chat-bubble">{chat.text}</div>
        {/* <div className="chat-footer opacity-50">Delivered</div> */}
      </div>
    </>
  );
}
