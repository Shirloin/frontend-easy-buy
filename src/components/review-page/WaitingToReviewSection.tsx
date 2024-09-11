import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Button from "../ui/Button";

export default function WaitingToReviewSection() {
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("");
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  useEffect(() => {
    if (rating === 5) {
      setStatus("Very Good!");
    } else if (rating === 4) {
      setStatus("Good");
    } else if (rating === 3) {
      setStatus("Average");
    } else if (rating === 2) {
      setStatus("Bad");
    } else if (rating === 1) {
      setStatus("Very Bad");
    } else {
      setStatus("");
    }
  }, [rating]);
  return (
    <>
      <div className="w-full">
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
        <hr />
        <div className="flex gap-4">
          <img className="h-20 w-20" src="" alt="" />
          <div className="flex w-full flex-col gap-2">
            <p className="font-semibold">Product Name - Product Variant Name</p>
            <div className="flex gap-2">
              <Rating onClick={handleRating} iconsCount={5} size={30} />
              <p className="text-primary">{status}</p>
            </div>
            <textarea
              className="h-28 max-h-28 w-full rounded-md p-2 text-sm ring-1 ring-gray-200"
              placeholder="Write your review here"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
