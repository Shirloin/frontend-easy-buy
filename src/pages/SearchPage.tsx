import { useSearchParams } from "react-router-dom";
import { useSearchProduct } from "../lib/useProductQuery";
import ProductLoadingCard from "../components/cards/ProductLoadingCard";
import ProductCard from "../components/cards/ProductCard";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const {
    data: products,
    isLoading,
    error,
  } = useSearchProduct(query as string);
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-col p-10">
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <ProductLoadingCard key={index} />
          ))}
        {products && products.length > 0 && (
          <div>
            <h1 className="text-2xl font-bold">New Product</h1>
            <div className="my-4 flex flex-wrap gap-4">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
