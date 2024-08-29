import { useEffect, useRef } from "react";
import ChatBubbleEnd from "../ui/ChatBubbleEnd";
import ChatBubbleStart from "../ui/ChatBubbleStart";
import { useAuth } from "../../contexts/AuthContext";
import { CiPaperplane } from "react-icons/ci";

export default function ChatBoxSection() {
  const { user } = useAuth();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);
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
          <ChatBubbleStart />
          <ChatBubbleEnd />
          <ChatBubbleStart />
          <ChatBubbleEnd />
          <ChatBubbleStart />
          <ChatBubbleEnd />
          <ChatBubbleStart />
          <ChatBubbleEnd />
        </div>

        <form className="flex w-full items-center px-4 py-2">
          <input
            type="text"
            className="mr-4 h-10 w-full rounded-md p-2 ring-1 ring-primary"
            placeholder="Write message..."
          />
          <button className="min-h-10 min-w-10 rounded-full bg-primary text-center text-white">
            <CiPaperplane className="h-6 w-6" />
          </button>
        </form>
      </div>
    </>
  );
}
