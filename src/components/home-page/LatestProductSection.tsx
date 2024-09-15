import { useGetLatestProduct } from "../../lib/useProductQuery";
import ProductCard from "../cards/ProductCard";
import ProductLoadingCard from "../cards/ProductLoadingCard";

export default function LatestProductSection() {
  const { data: products, isLoading } = useGetLatestProduct();

  return (
    <>
      {isLoading && (
        <div className="my-4 flex flex-wrap gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductLoadingCard key={index} />
          ))}
        </div>
      )}
      {products && products.length > 0 && (
        <div className="min-w-[500px]">
          <h1 className="text-lg font-bold lg:text-2xl">New Product</h1>
          <div className="my-4 flex flex-wrap gap-4">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
