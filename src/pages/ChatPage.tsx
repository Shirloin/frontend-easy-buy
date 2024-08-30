import { useEffect } from "react";
import ChatBoxSection from "../components/chat-page/ChatBoxSection";
import ChatListSection from "../components/chat-page/ChatListSection";
import Button from "../components/ui/Button";
import { io } from "socket.io-client";

export default function ChatPage() {
  const socket = io("http://localhost:3000");

  const joinRoom = () => {
    socket.emit("join_room", "room1");
  };
  const send = () => {
    socket.emit("send_message", {
      room: "room1",
      message: "testing message",
    });
  };
  useEffect(() => {
    function handleReceiveMessage(data: any) {
      console.log("Received message from server:", data.message);
    }
    socket.on("receive_message", handleReceiveMessage);
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, []);

  return (
    <>
      <div className="flex flex-grow bg-slate-200/50">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-10 py-4">
          <Button
            title="Join Room"
            onClick={joinRoom}
            className="w-fit"
            type="outline"
          />
          <Button
            title="Send"
            onClick={send}
            className="w-fit"
            type="outline"
          />
          <div className="flex max-h-[580px] w-full rounded-xl bg-white shadow-all-sides">
            <ChatListSection />
            <ChatBoxSection />
          </div>
        </div>
      </div>
    </>
  );
}
