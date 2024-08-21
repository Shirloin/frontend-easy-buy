import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/IProduct";
import { formatNumber } from "../../util/Util";

interface ProductCardProps {
  product?: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <Link
        to={`/product/${product?._id}`}
        className="h-80 w-44 rounded-md bg-white shadow-md"
      >
        <img
          className="h-44 w-44 rounded-md object-cover"
          src={product?.productImages[0].imageUrl}
          alt=""
        />
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{product?.name}</p>
          <p className="font-bold">
            Rp{formatNumber(product!.productVariants[0].price)}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <img
              className="h-5 w-5 rounded-full object-cover"
              src={product?.shop.imageUrl}
              alt=""
            />
            <p className="text-sm font-medium text-gray-500">
              {product?.shop.name}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
