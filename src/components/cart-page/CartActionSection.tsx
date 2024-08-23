import { useCartStore } from "../../hooks/useCartStore";
import { ICart } from "../../interfaces/ICart";
import { formatNumber } from "../../util/Util";
import Button from "../ui/Button";
interface CartActionSectionProps {
  carts: ICart[];
}

export default function CartActionSection({ carts }: CartActionSectionProps) {
  const { cartItems } = useCartStore();

  const totalPrice = cartItems
    .filter((item) => item.isSelected)
    .reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = () => {};
  return (
    <>
      <div className="sticky top-28 h-fit w-full min-w-96 max-w-96 rounded-xl bg-white p-4">
        <p className="text-lg font-bold">Shopping Summary</p>
        <div className="mt-8 flex items-center justify-between">
          <p>Total</p>
          <p className="text-lg font-bold">Rp{formatNumber(totalPrice)}</p>
        </div>
        <hr />
        <Button
          title="Buy"
          onClick={handleSubmit}
          className="w-full text-xl font-bold"
        />
      </div>
    </>
  );
}

export function CartActionLoading() {
  return (
    <>
      <div className="sticky top-28 h-fit w-full min-w-96 max-w-96 rounded-xl bg-white p-4">
        <p className="skeleton h-6 w-32"></p>
        <div className="mt-8 flex items-center justify-between">
          <p className="skeleton h-6 w-20"></p>
          <p className="skeleton h-6 w-28"></p>
        </div>
        <hr />
        <div className="skeleton h-10 w-full"></div>
      </div>
    </>
  );
}
