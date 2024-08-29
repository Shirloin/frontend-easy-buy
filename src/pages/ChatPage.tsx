import ChatBoxSection from "../components/chat-page/ChatBoxSection";
import ChatListSection from "../components/chat-page/ChatListSection";

export default function ChatPage() {
  return (
    <>
      <div className="flex flex-grow bg-slate-200/50">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-10 py-4">
          <div className="flex max-h-[580px] w-full rounded-xl bg-white shadow-all-sides">
            <ChatListSection />
            <ChatBoxSection />
          </div>
        </div>
      </div>
    </>
  );
}
