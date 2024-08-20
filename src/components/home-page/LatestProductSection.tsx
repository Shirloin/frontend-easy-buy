import { useGetLatestProduct } from "../../lib/useProductQuery";
import ProductCard from "../cards/ProductCard";

export default function LatestProductSection() {
  const { data: products, isLoading, isError } = useGetLatestProduct();

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">New Product</h1>
        <div className="my-4 flex flex-wrap gap-4">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}
