import ChatBoxSection from "../components/chat-page/ChatBoxSection";
import ChatListSection from "../components/chat-page/ChatListSection";
import { BsChatSquare } from "react-icons/bs";
import { useGetAllUserChatRoom } from "../lib/useChatQuery";
import { useChatStore } from "../hooks/useChatStore";

export default function ChatPage() {
  const { room } = useChatStore();
  const { data: rooms, isLoading, error } = useGetAllUserChatRoom();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="flex flex-grow items-center bg-slate-200/50">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-10 py-4">
          <div className="flex h-[calc(100vh-120px)] w-full rounded-xl bg-white shadow-all-sides">
            {rooms && rooms.length > 0 ? (
              <>
                <ChatListSection rooms={rooms} state="User" />
                {room._id ? (
                  <ChatBoxSection state="User" />
                ) : (
                  <div className="flex flex-grow flex-col items-center justify-center">
                    <p className="mt-4 text-xl font-semibold">
                      Choose User Or Shop To Start Conversation
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-grow flex-col items-center justify-center">
                <BsChatSquare className="h-32 w-32" />
                <h1 className="text-2xl font-bold">
                  You haven't started any chats.
                </h1>
                <h1 className="text-2xl font-bold">
                  Ask about products or track your orders!
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
