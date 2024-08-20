import { IProduct } from "../../interfaces/IProduct";

interface ProductDetailSectionProps {
  product: IProduct;
}

export default function ProductDetailSection({
  product,
}: ProductDetailSectionProps) {
  return (
    <>
      <div className="w-full">
        <p className="text-xl font-bold">{product?.name}</p>
        <p className="text-2xl font-bold">
          ${product.productVariants[0].price}
        </p>
      </div>
    </>
  );
}
