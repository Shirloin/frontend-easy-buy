import { FaStar } from "react-icons/fa";
import { IShop } from "../../interfaces/IShop";

interface ShopSectionProps {
  shop?: IShop;
  isLoading?: boolean;
}

export default function ShopSection({ shop, isLoading }: ShopSectionProps) {
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
            <div className="flex items-center">
              <FaStar className="h-4 w-4 text-yellow-300" />
              <p>
                5.0 <span className="text-gray-400">(50 Rating)</span>
              </p>
            </div>
          </div>
        </div>
        <button className="h-8 w-24 rounded-lg p-1 font-bold text-primary ring-1 ring-primary">
          Follow
        </button>
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
