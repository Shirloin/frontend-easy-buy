import { IoTrashOutline } from "react-icons/io5";
import { ICartItem } from "../../interfaces/ICartItem";
import { formatNumber } from "../../util/Util";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartStore } from "../../hooks/useCartStore";
import { ChangeEvent } from "react";
import {
  useDecrementCartQuantity,
  useDeleteCartItem,
  useIncrementCartQuantity,
  useUpdateCartQuantity,
} from "../../lib/useCartQuery";
import { ICart } from "../../interfaces/ICart";
import toast from "react-hot-toast";

interface CartItemCardProps {
  cart: ICart;
  item: ICartItem;
}

export default function CartItemCard({ cart, item }: CartItemCardProps) {
  const {
    cartItems,
    toggleItemSelection,
    setQuantity,
    incrementCartItem,
    decrementCartItem,
  } = useCartStore();
  const updateCartQuantity = useUpdateCartQuantity();
  const incrementCartQuantity = useIncrementCartQuantity();
  const decrementCartQuantity = useDecrementCartQuantity();
  const deleteCartItem = useDeleteCartItem();

  const cartItem = cartItems.find(
    (c) => c.cartId === cart._id && c.itemId === item._id,
  );

  const onQuantityChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(e.target.value);
    const cartId = cart._id;
    const itemId = item._id;
    setQuantity(cartId, itemId, quantity);
    try {
      await updateCartQuantity.mutateAsync({
        cartItemId: itemId,
        quantity: quantity,
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const handleIncrementQuantity = async () => {
    const variantId = item.variant._id;
    const cartId = cart._id;
    const itemId = item._id;

    incrementCartItem(cartId, itemId);
    try {
      await incrementCartQuantity.mutateAsync({
        cartItemId: itemId,
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleDecrementQuantity = async () => {
    const variantId = item.variant._id;
    const cartId = cart._id;
    const itemId = item._id;
    decrementCartItem(cartId, itemId);
    try {
      await decrementCartQuantity.mutateAsync({
        cartItemId: itemId,
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleDeleteCartItem = async () => {
    const itemId = item._id;
    try {
      const message = await deleteCartItem.mutateAsync({ cartItemId: itemId });
      toast.success(message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex items-start gap-6">
            <input
              type="checkbox"
              className="h-5 w-5 accent-black ring-0"
              checked={cartItem?.isSelected ?? false}
              onChange={() => toggleItemSelection(cart._id, item._id)}
            />
            <div className="flex items-start gap-2">
              <img
                className="h-20 w-20 rounded-md object-cover"
                src={item.variant.product.productImages[0].imageUrl}
                alt=""
              />
              <div className="text-sm font-semibold">
                <p className="text-error">Stock: {item.variant.stock}</p>
                <p>{item.variant.product.name}</p>
                <p>{item.variant.name}</p>
              </div>
            </div>
          </div>
          <p className="font-bold">
            Rp{formatNumber(item.variant.price * (cartItem?.quantity ?? 1))}
          </p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button onClick={handleDeleteCartItem}>
            <IoTrashOutline className="h-6 w-6 text-gray-400" />
          </button>
          <div className="flex w-20 items-center justify-between rounded-md px-1 py-0.5 ring-1 ring-gray-500">
            <button
              disabled={!cartItem || cartItem.quantity <= 1}
              onClick={handleDecrementQuantity}
              className={`h-6 w-6 rounded-md ${!cartItem || cartItem.quantity <= 1 ? "cursor-not-allowed text-gray-200 hover:bg-none" : "text-primary hover:bg-gray-200"}`}
            >
              <AiOutlineMinus className="h-4 w-4 self-center" />
            </button>
            <input
              className={`mx-2 w-6 text-center text-sm outline-none ring-0`}
              type="number"
              value={cartItem?.quantity ?? 1}
              onChange={onQuantityChange}
            />
            <button
              disabled={!cartItem || cartItem.quantity >= item.variant.stock}
              onClick={handleIncrementQuantity}
              className={`h-6 w-6 rounded-md ${!cartItem || cartItem.quantity >= item.variant.stock ? "cursor-not-allowed text-gray-200 hover:bg-none" : "text-primary hover:bg-gray-200"}`}
            >
              <AiOutlinePlus className="h-4 w-4 self-center" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function CartItemLoading() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between gap-6">
          <div className="flex items-start gap-6">
            <div className="skeleton h-6 w-6" />
            <div className="flex items-start gap-2">
              <div className="skeleton h-20 w-20 rounded-md" />
              <div className="flex flex-col gap-2">
                <div className="skeleton h-4 w-32" />
                <div className="skeleton h-4 w-32" />
                <div className="skeleton h-4 w-32" />
              </div>
            </div>
          </div>
          <p className="skeleton h-4 w-20"></p>
        </div>
        <div className="skeleton h-8 w-20 self-end"></div>
      </div>
    </>
  );
}
