import ChatCard from "../../cards/ChatCard";

export default function ChatListSection() {
  return (
    <>
      <div className="flex w-80 flex-col overflow-auto border-r-2">
        <div className="max-h-[566px] overflow-y-auto">
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </div>
      </div>
    </>
  );
}
