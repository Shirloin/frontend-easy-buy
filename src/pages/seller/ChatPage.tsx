import ChatBoxSection from "../../components/chat-page/ChatBoxSection";
import ChatListSection from "../../components/chat-page/ChatListSection";
import { useChatStore } from "../../hooks/useChatStore";
import { useGetAllShopChatRoom } from "../../lib/useChatQuery";
import { BsChatSquare } from "react-icons/bs";

export default function SellerChatPage() {
  const { room } = useChatStore();
  const { data: rooms, isLoading, error } = useGetAllShopChatRoom();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="mx-auto my-4 flex h-[calc(100vh-120px)] w-full self-center rounded-xl shadow-all-sides">
        {rooms && rooms.length > 0 ? (
          <>
            <ChatListSection rooms={rooms} state="Shop" />
            {room._id ? (
              <ChatBoxSection state="Shop" />
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
            <h1 className="text-2xl font-bold">You don't have any chats.</h1>
            <h1 className="text-2xl font-bold">Improve your products.</h1>
          </div>
        )}
      </div>
    </>
  );
}
