import Button from "../ui/Button";
import useCreateReviewStore from "../../hooks/useCreateReviewStore";
import ReviewForm from "./ReviewForm";
import { useGetTransactionWithNoReview } from "../../lib/useTransactionQuery";
import { formatDate } from "../../util/Util";

export default function WaitingToReviewSection() {
  const { order, setOrder } = useCreateReviewStore();
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
                <div className="flex w-full items-center justify-between">
                  <p className="font-semibold text-primary">{order._id}</p>
                  <p className="font-semibold text-gray-400">
                    Order Date: {formatDate(order.date)}
                  </p>
                </div>
                {order.details.map((detail) => (
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex gap-4">
                      <img className="h-16 w-16" src="" alt="" />
                      <div className="text-primary">
                        <p>{detail.product.name}</p>
                        <p>{detail.variant.name}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        setOrder(detail);
                      }}
                      className="h-fit"
                      title="Review"
                      size="large"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
