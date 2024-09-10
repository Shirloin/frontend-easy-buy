import toast from "react-hot-toast";
import { useShipmentStore } from "../../hooks/useShipmentStore";
import { useCreateTransaction } from "../../lib/useTransactionQuery";
import { formatNumber } from "../../util/Util";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function ShipmentActionSection() {
  const { carts, address } = useShipmentStore();
  const createTransaction = useCreateTransaction();
  const navigate = useNavigate();
  const totalPrice = carts!.reduce((total, cart) => {
    return (
      total +
      cart.items.reduce((cartTotal, item) => {
        return cartTotal + item.variant.price * item.quantity;
      }, 0)
    );
  }, 0);

  const handleSubmit = async () => {
    if (!address) {
      toast.error("Please select destination address first!");
      return;
    }
    try {
      const cartIds = carts?.map((cart) => cart._id) as string[];
      const message = await createTransaction.mutateAsync({
        cartIds: cartIds,
        address: address,
      });
      toast.success(message);
      navigate("/ ");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="sticky top-28 h-fit w-full min-w-96 max-w-96 rounded-xl bg-white p-4">
        <p className="text-lg font-bold">Shopping Summary</p>
        <div className="mt-8 flex items-center justify-between">
          <p>Total Price (3 Products)</p>
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
