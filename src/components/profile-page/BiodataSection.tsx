import { useAuth } from "../../contexts/AuthContext";
import Button from "../ui/Button";

export default function BiodataSection() {
  const { user } = useAuth();
  return (
    <>
      <div className="flex h-full w-full gap-6">
        <div className="shadow-all h-full w-72 rounded-xl border p-4 shadow-md">
          <img className="h-80 w-full" src={user?.imageUrl} alt="" />
          <label className="mt-2 flex w-full cursor-pointer flex-col items-center justify-center rounded-md p-2 ring-1 ring-primary">
            <input className="hidden" type="file" accept="image/*" />
            <p className="font-semibold text-primary">Choose Photo</p>
          </label>
          <p className="mt-4 text-sm leading-tight tracking-tight text-gray-400">
            File size: maximum 10,000,000 bytes (10 Megabytes). Allowed file
            extensions: .JPG .JPEG .PNG
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-gray-500">Change Biodata</p>
          <div className="flex">
            <p className="w-40">Username</p>
            <p className="mr-4">{user?.username}</p>
            <Button type="ghost" title="Change" />
          </div>
          <div className="flex">
            <p className="w-40">Email</p>
            <p className="mr-4">{user?.email}</p>
            <Button type="ghost" title="Change" />
          </div>
        </div>
      </div>
    </>
  );
}
