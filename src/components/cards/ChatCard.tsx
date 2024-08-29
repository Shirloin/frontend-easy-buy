import { useAuth } from "../../contexts/AuthContext";

export default function ChatCard() {
  const { user } = useAuth();

  return (
    <>
      <button className="flex w-full items-center justify-start gap-2 rounded-xl border-b p-4 hover:bg-gray-200">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={user?.shop?.imageUrl} />
          </div>
        </div>
        <p className="text-xs font-bold">{user?.shop?.name}</p>
      </button>
    </>
  );
}
