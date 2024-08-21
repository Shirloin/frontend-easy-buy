import { FaStar } from "react-icons/fa";
import { IProduct } from "../../interfaces/IProduct";
import { formatNumber } from "../../util/Util";
import { useState } from "react";
import { useProductDetailStore } from "../../hooks/useProductDetailStore";
import { IProductVariant } from "../../interfaces/IProductVariant";

interface ProductDetailSectionProps {
  product: IProduct;
  isLoading?: boolean;
}

export default function ProductDetailSection({
  product,
  isLoading,
}: ProductDetailSectionProps) {
  const { selectedVariantIndex, selectVariant } = useProductDetailStore();

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
          Rp{formatNumber(product.productVariants[0].price)}
        </p>
        <hr />
        <div>
          <p className="text-lg font-bold">Choose Variant</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.productVariants.map((variant, index) => (
              <button
                key={variant._id}
                onClick={() => selectVariant(index, variant)}
                className={`min-w-20 rounded-md p-1.5 text-center ring-1 ${index === selectedVariantIndex ? "bg-green-100 ring-1 ring-green-500" : "ring-gray-400"}`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
        <hr />
        <div>
          <p className="text-lg font-bold">Description</p>
          <p className="font-medium">{product.description}</p>
        </div>
      </div>
    </>
  );
}

function ProductDetailLoading() {
  return (
    <>
      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full flex-col gap-2">
          <p className="skeleton h-4 w-full"></p>
          <p className="skeleton h-4 w-full"></p>
          <p className="skeleton h-4 w-full"></p>
        </div>
        <div className="skeleton h-[0.5px] w-full"></div>
        <div className="">
          <p className="skeleton h-6 w-36"></p>
          <div className="mt-2 flex flex-wrap gap-2">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="skeleton h-10 min-w-20 rounded-md p-1.5"
              ></div>
            ))}
          </div>
        </div>
        <div className="skeleton h-[0.5px] w-full"></div>
        <p className="skeleton h-6 w-36"></p>
        <p className="skeleton h-20 w-full"></p>
      </div>
    </>
  );
}
