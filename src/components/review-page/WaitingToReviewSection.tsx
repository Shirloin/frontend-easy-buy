import useCreateReviewStore from "../../hooks/useCreateReviewStore";
import ReviewForm from "./ReviewForm";
import { useGetTransactionWithNoReview } from "../../lib/useTransactionQuery";
import { formatDate } from "../../util/Util";
import WaitingToReviewCard from "../cards/WaitingToReviewCard";

export default function WaitingToReviewSection() {
  const { order } = useCreateReviewStore();
  const { data: orders, isLoading } = useGetTransactionWithNoReview();
  if (isLoading) {
    return null;
  }
  return (
    <>
      <div className="w-full">
        {order ? (
          <ReviewForm />
        ) : (
          <div>
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
                  <WaitingToReviewCard key={detail._id} detail={detail} />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
