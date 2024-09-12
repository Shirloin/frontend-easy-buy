import { Rating } from "react-simple-star-rating";
import useCreateReviewStore from "../../hooks/useCreateReviewStore";
import Button from "../ui/Button";
import { SlArrowLeft } from "react-icons/sl";
import { ChangeEvent } from "react";
import { useCreateReview } from "../../lib/useReviewQuery";
import toast from "react-hot-toast";

export default function ReviewForm() {
  const { order, rating, setRating, status, setOrder, text, setText } =
    useCreateReviewStore();
  const createReview = useCreateReview();

  const handleBack = () => {
    setOrder(null);
  };

  const handleSubmit = async () => {
    try {
      const message = await createReview.mutateAsync({
        rating: rating,
        text: text,
        productVariant: order!.variant._id,
        transactionDetail: order!._id,
      });
      setOrder(null);
      toast.success(message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        onClick={handleBack}
        title="Back"
        type="ghost"
        className="text-lg"
      >
        <SlArrowLeft className="h-4 w-4" />
      </Button>
      <div className="mt-4 flex gap-4">
        <img className="h-20 w-20" src={order?.variant.imageUrl} alt="" />
        <div className="flex w-full flex-col gap-2">
          <p className="font-semibold">
            {order?.product.name} - {order?.variant.name}
          </p>
          <div className="flex items-center gap-2">
            <Rating onClick={setRating} iconsCount={5} size={30} />
            <p
              className={`text-sm font-bold ${rating > 3 ? "text-primary" : rating === 0 ? "text-orange-400" : "text-error"}`}
            >
              {status}
            </p>
          </div>
          <textarea
            className="h-28 max-h-28 w-full rounded-md p-2 text-sm ring-1 ring-gray-200"
            placeholder="Write your review here"
            value={text}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
          ></textarea>
          <Button onClick={handleSubmit} title="Submit" />
        </div>
      </div>
    </>
  );
}
