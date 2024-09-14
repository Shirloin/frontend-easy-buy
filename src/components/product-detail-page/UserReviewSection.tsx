import { Rating } from "react-simple-star-rating";
import { IProductRating, IReview } from "../../interfaces/IReview";
import ReviewCard from "../cards/ReviewCard";

interface UserReviewSectionProps {
  reviews?: IReview[];
  productRating?: IProductRating;
}

export default function UserReviewSection({
  reviews = [],
  productRating,
}: UserReviewSectionProps) {
  return (
    <>
      <div className="my-8">
        {reviews.length < 1 ? (
          <div className="my-10 text-center text-xl font-bold">No Review</div>
        ) : (
          <div className="flex gap-8">
            <div className="my-2 max-h-40 min-w-60 rounded-md border-2 p-4 text-center">
              <h1 className="text-xl font-bold uppercase">User Reviews</h1>
              <div className="my-4 flex items-center justify-center gap-2">
                <Rating
                  iconsCount={1}
                  size={35}
                  initialValue={1}
                  disableFillHover
                  readonly
                />
                <h1 className="text-3xl font-semibold">
                  {productRating?.averageRating} / 5.0
                </h1>
              </div>
              <p className="text-center text-sm text-gray-400">
                {productRating?.userCount} rating . {productRating?.userCount}{" "}
                reviews
              </p>
            </div>
            <div className="w-full">
              {reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
