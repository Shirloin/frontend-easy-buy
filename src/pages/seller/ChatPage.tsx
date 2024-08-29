import ChatBoxSection from "../../components/seller/chat-page/ChatBoxSection";
import ChatListSection from "../../components/seller/chat-page/ChatListSection";

export default function SellerChatPage() {
  return (
    <>
      <div className="mx-auto my-4 flex max-h-full w-full rounded-xl shadow-all-sides">
        <ChatListSection />
        <ChatBoxSection />
      </div>
    </>
  );
}
