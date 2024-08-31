import { useEffect } from "react";
import ChatBoxSection from "../components/chat-page/ChatBoxSection";
import ChatListSection from "../components/chat-page/ChatListSection";
import { BsChatSquare } from "react-icons/bs";
import { socket } from "../util/Socket";
import { useGetAllUserChatRoom } from "../lib/useChatQuery";

export default function ChatPage() {
  const { data: rooms, isLoading, error } = useGetAllUserChatRoom();
  const leaveRoom = () => {
    socket.emit("leave_room", "leave");
  };
  const send = () => {
    socket.emit("send_message", {
      room: "room1",
      message: "testing message",
    });
  };

  useEffect(() => {
    function handleReceiveMessage(data: any) {
      console.log("Received message from server:", data);
    }

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      console.log("Cleaning up event listeners");
      socket.off("receive_message", handleReceiveMessage);
    };
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="flex flex-grow bg-slate-200/50">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-10 py-4">
          <div className="flex h-[580px] w-full rounded-xl bg-white shadow-all-sides">
            {rooms && rooms.length > 0 ? (
              <>
                <ChatListSection rooms={rooms} />

                <ChatBoxSection />
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
