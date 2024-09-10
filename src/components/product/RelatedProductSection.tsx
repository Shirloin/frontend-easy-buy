import { useGetRelatedProducts } from "../../lib/useProductQuery";
import ProductCard from "../cards/ProductCard";

interface RelatedProductSectionProps {
  categoryId: string;
}

export default function RelatedProductSection({
  categoryId,
}: RelatedProductSectionProps) {
  const {
    data: products,
    isLoading,
    error,
  } = useGetRelatedProducts(categoryId);
  if (isLoading) return null;
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div className="mt-6 w-full">
        <h1 className="text-2xl font-bold">Related Product</h1>
        <div className="mt-6 flex w-full flex-wrap gap-6">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
