import ChatBoxSection from "../../components/chat-page/ChatBoxSection";
import ChatListSection from "../../components/chat-page/ChatListSection";

export default function SellerChatPage() {
  return (
    <>
      <div className="mx-auto my-4 flex max-h-[580px] w-full rounded-xl shadow-all-sides">
        <ChatListSection />
        <ChatBoxSection />
      </div>
    </>
  );
}
