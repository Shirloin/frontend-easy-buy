import { useGetLatestProduct } from "../../lib/useProductQuery";
import ProductCard from "../cards/ProductCard";
import ProductLoadingCard from "../cards/ProductLoadingCard";

export default function LatestProductSection() {
  const { data: products, isLoading, isError } = useGetLatestProduct();

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">New Product</h1>
        <div className="my-4 flex flex-wrap gap-4">
          {isLoading &&
            Array.from({ length: 10 }).map((_, index) => (
              <ProductLoadingCard key={index} />
            ))}
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}
