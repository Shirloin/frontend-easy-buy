import { Rating } from "react-simple-star-rating";
import { IReview } from "../../interfaces/IReview";
import { formatDate } from "../../util/Util";

interface ReviewCardProps {
  review: IReview;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <>
      <div className="my-2 rounded-md border-2 p-4">
        <p className="flex items-center gap-4">
          <Rating
            iconsCount={5}
            size={20}
            initialValue={review.rating}
            disableFillHover
            readonly
          />
          {formatDate(review.createdAt)}
        </p>
        <div className="my-1 flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={review.creator.imageUrl} alt="Profile Image" />
            </div>
          </div>
          <p className="font-semibold">{review.creator.username}</p>
        </div>
        <p className="text-sm text-gray-500">
          Variant: {review.productVariant.name}
        </p>
        <p>{review.text}</p>
      </div>
    </>
  );
}
