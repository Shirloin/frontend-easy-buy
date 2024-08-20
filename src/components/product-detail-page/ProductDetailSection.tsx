import { FaStar } from "react-icons/fa";
import { IProduct } from "../../interfaces/IProduct";

interface ProductDetailSectionProps {
  product: IProduct;
  isLoading?: boolean;
}

export default function ProductDetailSection({
  product,
  isLoading,
}: ProductDetailSectionProps) {
  if (isLoading) {
    return ProductDetailLoading();
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">{product?.name}</p>
        <div className="flex gap-2">
          <p>
            <span className="font-medium">Sold</span> 80+
          </p>
          <div className="flex items-center">
            <FaStar className="h-4 w-4 text-yellow-300" />
            <p>
              5.0 <span className="text-gray-400">(50 Rating)</span>
            </p>
          </div>
        </div>
        <p className="text-2xl font-bold">
          ${product.productVariants[0].price}
        </p>
      </div>
    </>
  );
}

function ProductDetailLoading() {
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <p className="skeleton h-4 w-full"></p>
        <p className="skeleton h-4 w-full"></p>
        <p className="skeleton h-4 w-full"></p>
      </div>
    </>
  );
}
