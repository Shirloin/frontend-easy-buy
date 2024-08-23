import { ChangeEvent, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoIosHeartEmpty, IoMdShare } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useProductDetailStore } from "../../hooks/useProductDetailStore";
import { formatNumber } from "../../util/Util";
import { useAddToCart } from "../../lib/useCartQuery";
import toast from "react-hot-toast";
import Button from "../ui/Button";

interface ProductDetailActionSectionProps {
  isLoading?: boolean;
}

export default function ProductDetailActionSection({
  isLoading,
}: ProductDetailActionSectionProps) {
  const addToCart = useAddToCart();
  const {
    product,
    quantity,
    addQuantity,
    minusQuantity,
    updateQuantity,
    selectedVariant,
  } = useProductDetailStore();
  if (isLoading) {
    return ProductDetailActionLoading();
  }

  const handleAddToCart = async () => {
    try {
      const productId = selectedVariant._id;
      const shopId = product?.shop._id;
      const message = await addToCart.mutateAsync({
        productId,
        shopId,
        quantity,
      });
      toast.success(message);
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="sticky top-28 flex h-fit w-full max-w-72 flex-col rounded-md p-4 ring-1 ring-gray-200">
        <p className="text-lg font-bold">Set Quantity</p>
        <div className="mt-6 flex w-full items-center gap-2">
          <div className="flex w-28 items-center justify-between rounded-md px-1 py-0.5 ring-1 ring-gray-500">
            <button
              onClick={minusQuantity}
              disabled={quantity === 1}
              className={`h-6 w-6 rounded-md ${quantity === 1 ? "cursor-not-allowed text-gray-200 hover:bg-none" : "text-primary hover:bg-gray-200"}`}
            >
              <AiOutlineMinus className="h-4 w-4 self-center" />
            </button>
            <input
              className={`mx-2 w-10 text-center text-lg outline-none ring-0`}
              type="number"
              value={quantity}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateQuantity(Number(e.target.value))
              }
            />
            <button
              disabled={quantity >= selectedVariant.stock}
              onClick={addQuantity}
              className={`h-6 w-6 rounded-md ${quantity === selectedVariant.stock ? "cursor-not-allowed text-gray-200 hover:bg-none" : "text-primary hover:bg-gray-200"}`}
            >
              <AiOutlinePlus className="h-4 w-4 self-center" />
            </button>
          </div>
          <div className="font-medium">Total Stock:</div>
          <p className="font-bold">{selectedVariant?.stock}</p>
        </div>
        {quantity < 1 && (
          <p className="text-wrap text-sm font-semibold leading-tight tracking-tight text-error">
            Minimal quantity to purchase this product is 1 product
          </p>
        )}

        {quantity > selectedVariant.stock && (
          <p className="text-wrap text-sm font-semibold leading-tight tracking-tight text-error">
            Max quantity reached. Reduce your quantity
          </p>
        )}

        <div className="mt-6 flex items-center justify-between">
          <p className="font-medium text-gray-400">SubTotal</p>
          <p className="text-xl font-bold">
            Rp{formatNumber(selectedVariant?.price * quantity)}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <Button title="Add To Cart" onClick={handleAddToCart} />
          <Button title="Buy Now" type="outline" onClick={handleAddToCart} />
        </div>
        <div className="mt-4 flex justify-between">
          <button className="flex items-center justify-center px-2 text-center text-sm font-bold">
            <IoChatboxEllipsesOutline className="mr-2 h-4 w-4" />
            <p>Chat</p>
          </button>
          <button className="flex items-center justify-center px-2 text-center text-sm font-bold">
            <IoIosHeartEmpty className="mr-2 h-4 w-4" />
            <p>Wishlist</p>
          </button>
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
