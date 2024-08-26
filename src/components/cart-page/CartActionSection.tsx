import toast from "react-hot-toast";
import { useCartStore } from "../../hooks/useCartStore";
import { useCreateTransaction } from "../../lib/useTransactionQuery";
import { formatNumber } from "../../util/Util";
import Button from "../ui/Button";
export default function CartActionSection() {
  const { cartItems } = useCartStore();
  const createTransaction = useCreateTransaction();

  const totalPrice = cartItems
    .filter((item) => item.isSelected)
    .reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = async () => {
    const selectedItems = cartItems.filter((item) => item.isSelected);
    const cartIds = selectedItems.map((item) => item.cartId);
    try {
      const message = await createTransaction.mutateAsync({ cartIds });
      toast.success(message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
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
