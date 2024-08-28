import toast from "react-hot-toast";
import { useGetTransactionByShop } from "../../lib/useTransactionQuery";
import OrderCard from "../../components/cards/OrderCard";

export default function OrderPage() {
  const { data: orders, isLoading, error } = useGetTransactionByShop();

  if (isLoading) {
    return;
  }
  if (error) {
    toast.error(error.message);
    return;
  }

  return (
    <>
      <div className="mx-auto w-full max-w-4xl py-6">
        <h1 className="text-xl font-bold">All Orders</h1>
        <div className="my-4">
          {orders?.map((order) => <OrderCard key={order._id} order={order} />)}
        </div>
      </div>
    </>
  );
}
