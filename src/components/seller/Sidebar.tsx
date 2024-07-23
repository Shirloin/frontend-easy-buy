import { GoInbox } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";

export default function Sidebar() {
    return (
        <>
            <div className="fixed flex h-full w-56 flex-col gap-4 border-r-2 px-4 py-6">
                <button className="hover:bg-slate-100 flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold">
                    <MdOutlineDashboard className="h-6 w-6" />
                    <p>Dashboard</p>
                </button>
                <button className="hover:bg-slate-100 flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold">
                    <IoChatboxEllipsesOutline className="h-6 w-6" />
                    <p>Chat</p>
                </button>
                <button className="hover:bg-slate-100 flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold">
                    <GoInbox className="h-6 w-6" />
                    <p>Product</p>
                </button>
                <button className="hover:bg-slate-100 flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold">
                    <LiaClipboardListSolid className="h-6 w-6" />
                    <p>Order</p>
                </button>
            </div>
        </>
    );
}
