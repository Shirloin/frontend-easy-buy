import { FaStar } from "react-icons/fa";
import { IShop } from "../../interfaces/IShop";
import { IProductRating } from "../../interfaces/IReview";

interface ShopSectionProps {
  shop?: IShop;
  isLoading?: boolean;
  productRating?: IProductRating;
}

export default function ShopSection({
  shop,
  isLoading,
  productRating,
}: ShopSectionProps) {
  if (isLoading) {
    return ShopLoading();
  }
  return (
    <>
      <div className="flex flex-grow justify-between">
        <div className="flex items-center justify-start">
          <img
            className="mr-2 h-12 w-12 rounded-full"
            src={shop?.imageUrl}
            alt=""
          />
          <div>
            <p className="text-lg font-bold uppercase">{shop?.name}</p>
            <div className="flex items-center gap-1">
              <FaStar className="h-4 w-4 text-yellow-300" />
              <p>
                {productRating?.averageRating}{" "}
                <span className="text-gray-400">
                  ({productRating?.userCount} Rating)
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* <button className="h-8 w-24 rounded-lg p-1 font-bold text-primary ring-1 ring-primary">
          Follow
        </button> */}
      </div>
    </>
  );
}

function ShopLoading() {
  return (
    <>
      <div className="flex flex-grow justify-between">
        <div className="flex items-center justify-start">
          <div className="skeleton mr-2 h-12 w-12 rounded-full" />
          <div className="flex flex-col gap-2">
            <p className="skeleton h-4 w-60"></p>
            <div className="skeleton h-4 w-60"></div>
          </div>
        </div>
        <button className="skeleton h-8 w-24 rounded-lg p-1"></button>
      </div>
    </>
  );
}
