import { useGetTransactionByUser } from "../../lib/useTransactionQuery";
import OrderCard from "../cards/OrderCard";

export default function OrderSection() {
  const { data: orders, isLoading } = useGetTransactionByUser();
  if (isLoading) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        {orders?.map((order) => <OrderCard order={order} state="User" />)}
      </div>
    </>
  );
}
