import { useGetTransactionWithReview } from "../../lib/useTransactionQuery";
import { formatDate } from "../../util/Util";
import MyReviewCard from "../cards/MyReviewCard";

export default function MyReviewSection() {
  const { data: orders, isLoading } = useGetTransactionWithReview();
  if (isLoading) {
    return null;
  }
  return (
    <>
      <div className="w-full">
        {orders?.map((order) => (
          <div key={order._id}>
            <div className="my-2 flex w-full items-center justify-between">
              <p className="font-semibold text-green-500">
                Seller: {order.shop.name}
              </p>
              <p className="text-gray-400">
                Order Date: {formatDate(order.date)}
              </p>
            </div>
            {order.details.map((detail) => (
              <MyReviewCard key={detail._id} detail={detail} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
