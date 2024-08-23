import { useCartStore } from "../../hooks/useCartStore";
import { ICart } from "../../interfaces/ICart";
import CartCard, { CartCardLoading } from "../cards/CartCard";
import Button from "../ui/Button";

interface CartListSectionProps {
  carts: ICart[];
}

export default function CartListSection({ carts }: CartListSectionProps) {
  const { cartItems, selectAll } = useCartStore();
  const totalItems = carts.reduce((sum, cart) => sum + cart.items.length, 0);
  const handleRemove = () => {};
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    selectAll(event.target.checked);
  };

  return (
    <>
      <div className="flex flex-grow flex-col gap-2">
        <div className="flex w-full items-center justify-between rounded-lg bg-white p-5">
          <div className="flex items-center gap-6">
            <input
              type="checkbox"
              onChange={handleSelectAll}
              className="h-5 w-5 accent-black ring-0"
              checked={cartItems.every((item) => item.isSelected)}
            />
            <p className="font-bold">Choose All ({totalItems})</p>
          </div>
          <Button
            title="Remove"
            onClick={handleRemove}
            type="ghost"
            size="large"
          />
        </div>
        {carts.map((cart) => (
          <CartCard key={cart._id} cart={cart} />
        ))}
      </div>
    </>
  );
}

export function CartListLoading() {
  return (
    <>
      <div className="flex flex-grow flex-col gap-2">
        <div className="flex w-full items-center justify-between rounded-lg bg-white p-5">
          <div className="flex items-center gap-6">
            <div className="skeleton h-6 w-6" />
            <p className="skeleton h-6 w-60"></p>
          </div>
          <div className="skeleton h-6 w-20"></div>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <CartCardLoading key={index} />
        ))}
      </div>
    </>
  );
}
