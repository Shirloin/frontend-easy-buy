import { ChangeEvent, useEffect, useRef, useState } from "react";
import ChatBubbleEnd from "../ui/ChatBubbleEnd";
import ChatBubbleStart from "../ui/ChatBubbleStart";
import { useAuth } from "../../contexts/AuthContext";
import { CiPaperplane } from "react-icons/ci";
import { useChatStore } from "../../hooks/useChatStore";
import { useGetChat } from "../../lib/useChatQuery";
import { isShop, isUser } from "../../util/Util";

interface ChatBoxSectionProps {
  state: "User" | "Shop";
}

export default function ChatBoxSection({ state }: ChatBoxSectionProps) {
  const { room } = useChatStore();
  const { user } = useAuth();
  const { data: chats, isLoading, error } = useGetChat(room._id);
  const [text, setText] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
  }

  const handleSendMessage = () => {};
  return (
    <>
      <div className="relative flex flex-grow flex-col">
        <div className="flex w-full items-center justify-start gap-2 border-b p-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user?.imageUrl} />
            </div>
          </div>
          <p className="font-bold">{user?.username}</p>
        </div>
        <div
          ref={chatContainerRef}
          className="flex h-full max-h-full flex-grow flex-col overflow-y-auto p-4"
        >
          {chats?.map((chat) => {
            if (state === "User" && isShop(chat.sender)) {
              return <ChatBubbleStart key={chat._id} chat={chat} />;
            } else if (state === "Shop" && isUser(chat.sender)) {
              return <ChatBubbleEnd key={chat._id} chat={chat} />;
            }
            return null;
          })}
        </div>

        <form className="flex w-full items-center px-4 py-2">
          <input
            type="text"
            className="mr-4 h-10 w-full rounded-md p-2 ring-1 ring-primary"
            placeholder="Write message..."
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <button className="min-h-10 min-w-10 rounded-full bg-primary text-center text-white">
            <CiPaperplane className="h-6 w-6" />
          </button>
        </form>
      </div>
    </>
  );
}
