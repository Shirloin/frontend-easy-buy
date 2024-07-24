import { GoInbox } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <div className="fixed flex h-full w-56 flex-col gap-4 border-r-2 px-4 py-6">
                <Link to={"/seller"} className="hover:bg-slate-100 flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold">
                    <MdOutlineDashboard className="h-6 w-6" />
                    <p>Dashboard</p>
                </Link>
                <Link to={"/seller/chat"} className="hover:bg-slate-100 flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold">
                    <IoChatboxEllipsesOutline className="h-6 w-6" />
                    <p>Chat</p>
                </Link>
                <Link to={"/seller/products"} className="hover:bg-slate-100 flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold">
                    <GoInbox className="h-6 w-6" />
                    <p>Product</p>
                </Link>
                <Link to={"/seller/orders"} className="hover:bg-slate-100 flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold">
                    <LiaClipboardListSolid className="h-6 w-6" />
                    <p>Order</p>
                </Link>
            </div>
        </>
    );
}
