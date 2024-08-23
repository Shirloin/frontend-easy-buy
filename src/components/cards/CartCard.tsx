import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import { ICart } from "../../interfaces/ICart";
import { ICartItem } from "../../interfaces/ICartItem";
import { formatNumber } from "../../util/Util";

interface CartCardProps {
  cart: ICart;
}

export default function CartCard({ cart }: CartCardProps) {
  return (
    <>
      <div className="flex w-full flex-col justify-center gap-6 rounded-lg bg-white p-5">
        <div className="flex items-center gap-6">
          <input type="checkbox" className="h-5 w-5 accent-black ring-0" />
          <div className="flex items-center gap-2">
            <img
              className="h-6 w-6 rounded-md"
              src={cart.shop.imageUrl}
              alt=""
            />
            <p className="font-bold">{cart.shop.name}</p>
          </div>
        </div>
        {cart.items.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}

function CartItem({ item }: { item: ICartItem }) {
  const quantity = 1;
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex items-start gap-6">
            <input type="checkbox" className="h-5 w-5 accent-black ring-0" />
            <div className="flex items-start gap-2">
              <img
                className="h-20 w-20 rounded-md"
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
          <p className="font-bold">Rp{formatNumber(item.variant.price)}</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button>
            <IoTrashOutline className="h-6 w-6 text-gray-400" />
          </button>
          <div className="flex w-20 items-center justify-between rounded-md px-1 py-0.5 ring-1 ring-gray-500">
            <button
              className={`h-6 w-6 rounded-md ${quantity === 1 ? "cursor-not-allowed text-gray-200 hover:bg-none" : "text-primary hover:bg-gray-200"}`}
            >
              <AiOutlineMinus className="h-4 w-4 self-center" />
            </button>
            <input
              className={`mx-2 w-6 text-center text-sm outline-none ring-0`}
              type="number"
              //   value={quantity}
              //   onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //     updateQuantity(Number(e.target.value))
              //   }
            />
            <button
            //   disabled={quantity >= selectedVariant.stock}
            //   onClick={addQuantity}
            //   className={`h-6 w-6 rounded-md ${quantity === selectedVariant.stock ? "cursor-not-allowed text-gray-200 hover:bg-none" : "text-primary hover:bg-gray-200"}`}
            >
              <AiOutlinePlus className="h-4 w-4 self-center" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function CartCardLoading() {
  return (
    <>
      <div className="flex w-full flex-col justify-center gap-6 rounded-lg bg-white p-5">
        <div className="flex items-center gap-6">
          <div className="skeleton h-6 w-6" />
          <div className="flex items-center gap-2">
            <div className="skeleton h-6 w-6 rounded-md" />
            <p className="skeleton h-6 w-40"></p>
          </div>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <CartItemLoading key={index} />
        ))}
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
