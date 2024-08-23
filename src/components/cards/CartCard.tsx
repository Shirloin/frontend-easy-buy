import { ChangeEvent } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function CartCard() {
  return (
    <>
      <div className="flex w-full flex-col justify-center gap-6 rounded-lg bg-white p-5">
        <div className="flex items-center gap-6">
          <input type="checkbox" className="h-5 w-5 accent-black ring-0" />
          <div className="flex items-center gap-2">
            <img
              className="h-5 w-5 rounded-md"
              src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p className="font-bold">SkyPass</p>
          </div>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </>
  );
}

function CartItem() {
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
                src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="text-xs">
                <p className="text-sm font-bold text-error">Stock: 15</p>
                <p className="font-bold">SkyPass</p>
                <p className="font-bold">SkyPass</p>
              </div>
            </div>
          </div>
          <p className="font-bold">Rp1.000.000</p>
        </div>
        <div className="flex justify-end">
          <div className="flex w-20 items-center justify-between rounded-md px-1 py-0.5 ring-1 ring-gray-500">
            <button
              className={`h-6 w-6 rounded-md ${quantity === 1 ? "cursor-not-allowed text-gray-200 hover:bg-none" : "text-primary hover:bg-gray-200"}`}
            >
              <AiOutlineMinus className="h-4 w-4 self-center" />
            </button>
            <input
              className={`mx-2 w-6 text-center text-sm outline-none ring-0`}
              type="number"
              value={quantity}
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
