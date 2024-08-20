import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoIosHeartEmpty, IoMdShare } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

interface ProductDetailActionSectionProps {
  isLoading?: boolean;
}

export default function ProductDetailActionSection({
  isLoading,
}: ProductDetailActionSectionProps) {
  const [quantity, setQuantity] = useState(1);
  if (isLoading) {
    return ProductDetailActionLoading();
  }

  return (
    <>
      <div className="sticky top-28 flex h-fit min-w-72 flex-col gap-6 rounded-md p-4 ring-1 ring-gray-200">
        <p className="text-lg font-bold">Set Quantity</p>
        <div className="flex w-full items-center gap-2">
          <div className="flex w-28 items-center justify-between rounded-md px-1 py-0.5 ring-1 ring-gray-500">
            <button
              disabled={quantity === 1}
              className={`h-6 w-6 rounded-md ${quantity === 1 ? "cursor-not-allowed text-gray-200 hover:bg-none" : "text-primary hover:bg-gray-200"}`}
            >
              <AiOutlineMinus className="h-4 w-4 self-center" />
            </button>
            <input
              className="mx-2 w-10 text-center text-lg outline-none ring-0"
              type="number"
            />
            <button className="h-6 w-6 rounded-md text-primary hover:bg-gray-200">
              <AiOutlinePlus className="h-4 w-4 self-center" />
            </button>
          </div>
          <div className="font-medium">Total Stock:</div>
          <p className="font-bold">123</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-gray-400">SubTotal</p>
          <p className="text-xl font-bold">$10</p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="w-full rounded-md bg-primary py-1.5 text-center font-bold text-white">
            Add To Cart
          </button>
          <button className="w-full rounded-md py-1.5 text-center font-bold text-primary ring-1 ring-primary">
            Buy Now
          </button>
        </div>
        <div className="flex justify-between">
          <button className="flex items-center justify-center px-2 text-center text-sm font-bold">
            <IoChatboxEllipsesOutline className="mr-2 h-4 w-4" />
            <p>Chat</p>
          </button>
          <hr className="h-6 w-1 border-r border-gray-400" />
          <button className="flex items-center justify-center px-2 text-center text-sm font-bold">
            <IoIosHeartEmpty className="mr-2 h-4 w-4" />
            <p>Wishlist</p>
          </button>
          <hr className="h-6 w-1 border-r border-gray-400" />
          <button className="flex items-center justify-center px-2 text-center text-sm font-bold">
            <IoMdShare className="mr-2 h-4 w-4" />
            <p>Share</p>
          </button>
        </div>
      </div>
    </>
  );
}

function ProductDetailActionLoading() {
  return (
    <>
      <div className="flex h-fit min-w-72 flex-col gap-6 rounded-md p-4 ring-1 ring-gray-200">
        <p className="skeleton h-8 w-full"></p>
        <div className="flex w-full items-center gap-2">
          <div className="skeleton flex h-8 w-28"></div>
          <p className="skeleton h-2 w-16"></p>
        </div>
        <div className="flex items-center justify-between">
          <p className="skeleton h-4 w-28"></p>
          <p className="skeleton h-4 w-28"></p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="skeleton flex h-8 w-full"></div>
          <div className="skeleton flex h-8 w-full"></div>
          <div className="skeleton flex h-8 w-full"></div>
        </div>
      </div>
    </>
  );
}
