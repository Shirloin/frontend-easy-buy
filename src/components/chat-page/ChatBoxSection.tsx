import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import ChatBubbleEnd from "../ui/ChatBubbleEnd";
import ChatBubbleStart from "../ui/ChatBubbleStart";
import { useAuth } from "../../contexts/AuthContext";
import { CiPaperplane } from "react-icons/ci";
import { useChatStore } from "../../hooks/useChatStore";
import { useCreateChat, useGetChat } from "../../lib/useChatQuery";
import toast from "react-hot-toast";
import { socket } from "../../util/Socket";
import { IChat } from "../../interfaces/IChat";

interface ChatBoxSectionProps {
  state: "User" | "Shop";
}

export default function ChatBoxSection({ state }: ChatBoxSectionProps) {
  const { room } = useChatStore();
  const { user } = useAuth();
  const {
    data: initialChats,
    isLoading,
    error,
    refetch,
  } = useGetChat(room._id);
  const [chats, setChats] = useState<IChat[]>([]);
  const createChat = useCreateChat();
  const [text, setText] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialChats) {
      setChats(initialChats);
    }
  }, [initialChats]);
  useEffect(() => {
    refetch();
  }, [room, refetch]);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);
  useEffect(() => {
    function handleReceiveMessage(data: IChat) {
      setChats((prevChats) => [...prevChats, data]);
    }

    // socket.on("connect", () => {
    //   console.log("Socket connected:", socket.id);
    // });
    socket.on("connect_error", (error) => {
      console.error("WebSocket connection error:", error);
    });

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [chats]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
  }

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const senderId = state === "User" ? user!._id : user!.shop!._id;
      await createChat.mutateAsync({
        text: text,
        senderId: senderId,
        chatRoomId: room._id,
        type: state,
      });
      setText("");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="relative flex flex-grow flex-col">
        <div className="flex w-full items-center justify-start gap-2 border-b p-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src={state === "User" ? room.shop.imageUrl : room.user.imageUrl}
              />
            </div>
          </div>
          <p className="font-bold">
            {state === "User" ? room.shop.name : room.user.username}
          </p>
        </div>
        <div
          ref={chatContainerRef}
          className="flex h-full max-h-full flex-grow flex-col overflow-y-auto p-4"
        >
          {chats.map((chat) => {
            if (state === "User" && chat.type === "User") {
              return <ChatBubbleEnd key={chat._id} chat={chat} />;
            } else if (state === "Shop" && chat.type === "Shop") {
              return <ChatBubbleEnd key={chat._id} chat={chat} />;
            }
            return <ChatBubbleStart key={chat._id} chat={chat} />;
          })}
        </div>

        <form
          onSubmit={handleSendMessage}
          className="flex w-full items-center px-4 py-2"
        >
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
