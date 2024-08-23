import { ICart } from "../../interfaces/ICart";
import { useCartStore } from "../../hooks/useCartStore";
import CartItemCard, { CartItemLoading } from "./CartItemCard";

interface CartCardProps {
  cart: ICart;
}

export default function CartCard({ cart }: CartCardProps) {
  const { cartItems, toggleCartSelection } = useCartStore();
  const isSelected = cart.items.every((item) =>
    cartItems.find(
      (cartItem) =>
        cartItem.cartId === cart._id &&
        cartItem.itemId === item._id &&
        cartItem.isSelected,
    ),
  );

  return (
    <>
      <div className="flex w-full flex-col justify-center gap-6 rounded-lg bg-white p-5">
        <div className="flex items-center gap-6">
          <input
            type="checkbox"
            className="h-5 w-5 accent-black ring-0"
            onChange={() => toggleCartSelection(cart._id)}
            checked={isSelected}
          />
          <div className="flex items-center gap-2">
            <img
              className="h-6 w-6 rounded-md object-cover"
              src={cart.shop.imageUrl}
              alt=""
            />
            <p className="font-bold">{cart.shop.name}</p>
          </div>
        </div>
        {cart.items.map((item) => (
          <CartItemCard key={item._id} item={item} cartId={cart._id} />
        ))}
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
