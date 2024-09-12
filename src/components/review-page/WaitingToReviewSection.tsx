import Button from "../ui/Button";
import useCreateReviewStore from "../../hooks/useCreateReviewStore";
import ReviewForm from "./ReviewForm";

export default function WaitingToReviewSection() {
  const { order } = useCreateReviewStore();
  return (
    <>
      <div className="w-full">
        {order ? (
          <ReviewForm />
        ) : (
          <div>
            <div className="flex w-full items-center justify-between">
              <p className="font-semibold text-primary">ID here</p>
              <p className="font-semibold text-gray-400">
                Order Date: 28 Jul 2024
              </p>
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex gap-4">
                <img className="h-16 w-16" src="" alt="" />
                <div className="text-primary">
                  <p>Prouct Name</p>
                  <p>Prouct Variant Name</p>
                </div>
              </div>
              <Button className="h-fit" title="Review" size="large" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
