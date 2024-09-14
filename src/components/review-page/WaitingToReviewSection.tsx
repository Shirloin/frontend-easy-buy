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
              <div>
                <div className="mb-2 flex w-full items-center justify-between">
                  <p className="text-primary">{order._id}</p>
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
