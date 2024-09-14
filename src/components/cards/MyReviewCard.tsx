import { Rating } from "react-simple-star-rating";
import { ITransactionDetail } from "../../interfaces/ITransaction";

interface MyReviewCardProps {
  detail: ITransactionDetail;
}

export default function MyReviewCard({ detail }: MyReviewCardProps) {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex gap-4">
          <img className="h-16 w-16" src={detail.variant.imageUrl} alt="" />
          <div className="text-sm font-semibold leading-tight text-primary">
            <p>
              {detail.product.name} - {detail.variant.name}
            </p>
            {detail.review && (
              <>
                <Rating
                  iconsCount={5}
                  size={20}
                  initialValue={detail.review.rating}
                  disableFillHover
                  readonly
                />
                <p>{detail.review.text}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
