import { useAuth } from "../../contexts/AuthContext";

export default function BiodataSection() {
  const { user } = useAuth();
  return (
    <>
      <div className="flex h-full w-full gap-6">
        <div className="shadow-all h-full w-72 rounded-xl border p-4 shadow-md">
          <img className="h-80 w-full" src={user?.imageUrl} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-gray-500">Change Biodata</p>
          <div className="flex">
            <p className="w-40">Username</p>
            <p className="mr-4">{user?.username}</p>
          </div>
          <div className="flex">
            <p className="w-40">Email</p>
            <p className="mr-4">{user?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
