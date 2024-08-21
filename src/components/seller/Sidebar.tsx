import { GoInbox } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { TbCubePlus } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="fixed hidden h-full w-56 flex-col gap-4 border-r-2 px-4 py-6 lg:flex">
        <a
          href={"/seller"}
          className="flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold hover:bg-slate-100"
        >
          <MdOutlineDashboard className="h-6 w-6" />
          <p>Dashboard</p>
        </a>
        <a
          href={"/seller/chat"}
          className="flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold hover:bg-slate-100"
        >
          <IoChatboxEllipsesOutline className="h-6 w-6" />
          <p>Chat</p>
        </a>
        <a
          href={"/seller/products"}
          className="flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold hover:bg-slate-100"
        >
          <GoInbox className="h-6 w-6" />
          <p>Products</p>
        </a>
        <a
          href={"/seller/add-product"}
          className="flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold hover:bg-slate-100"
        >
          <TbCubePlus className="h-6 w-6" />
          <p>Add Product</p>
        </a>
        <a
          href={"/seller/orders"}
          className="flex w-full gap-4 rounded-lg px-6 py-3 text-center font-semibold hover:bg-slate-100"
        >
          <LiaClipboardListSolid className="h-6 w-6" />
          <p>Order</p>
        </a>
      </div>
    </>
  );
}
