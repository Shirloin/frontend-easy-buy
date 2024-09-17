import { IProduct } from "../../interfaces/IProduct";
import { formatNumber } from "../../util/Util";

interface ProductCardProps {
  product?: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <a
        href={`/product/${product?._id}`}
        className="h-72 min-h-72 w-36 rounded-md bg-white shadow-md lg:h-80 lg:w-44"
      >
        <img
          className="h-36 w-36 rounded-md object-cover lg:h-44 lg:w-44"
          src={product?.productVariants[0].imageUrl}
          alt=""
        />
        <div className="p-2">
          <p className="line-clamp-2 text-xs lg:text-sm">{product?.name}</p>
          <p className="text-sm font-bold lg:text-base">
            Rp{formatNumber(product!.productVariants[0].price)}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <img
              className="h-5 w-5 rounded-full object-cover"
              src={product?.shop.imageUrl}
              alt=""
            />
            <p className="text-xs font-medium text-gray-500 lg:text-sm">
              {product?.shop.name}
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
