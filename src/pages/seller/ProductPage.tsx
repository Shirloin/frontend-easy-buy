import { ChangeEvent, useEffect } from "react";
import ProductTable from "../../components/seller/product-page/ProductTable";
import { useGetMyShopProduct } from "../../lib/useProductQuery";
import { useSellerProductStore } from "../../hooks/useSellerProductStore";

export default function ProductPage() {
  const { data: products, isLoading, isError } = useGetMyShopProduct();
  const { filteredProducts, filter, setProducts, searchQuery } =
    useSellerProductStore();
  if (isError) {
    throw isError;
  }

  useEffect(() => {
    if (products) {
      setProducts(products);
    }
  }, [products, setProducts]);
  return (
    <>
      <div className="mx-auto w-full max-w-4xl py-6">
        {products ? (
          <div>
            <h1 className="text-xl font-bold">All Product</h1>
            <input
              className="my-2 w-full max-w-xs rounded-md px-2 py-1.5 ring-1 ring-gray-300 focus:ring-primary"
              type="text"
              placeholder="Search Product..."
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                filter(e.target.value)
              }
            />
            <div className="mt-4 flex w-full flex-col gap-6 rounded-md p-6 shadow-all-sides">
              {isLoading ? (
                <>
                  <h1>Loading...</h1>
                </>
              ) : (
                <ProductTable products={filteredProducts} />
              )}
            </div>
          </div>
        ) : (
          <div className="mt-6 w-full rounded-lg px-6 py-4 text-center text-xl font-bold shadow-all-sides">
            No Product
          </div>
        )}
      </div>
    </>
  );
}
