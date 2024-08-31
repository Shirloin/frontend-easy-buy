import { useParams } from "react-router-dom";
import { useGetProductDetail } from "../lib/useProductQuery";
import ProductDetailImageSection from "../components/product-detail-page/ProductDetailImageSection";
import ProductDetailSection from "../components/product-detail-page/ProductDetailSection";
import ProductDetailActionSection from "../components/product-detail-page/ProductDetailActionSection";
import { useProductDetailStore } from "../hooks/useProductDetailStore";
import { useEffect } from "react";
import ShopSection from "../components/product-detail-page/ShopSection";

export default function ProductDetailPage() {
  const { id } = useParams();

  const { setSelectedVariant, setProduct } = useProductDetailStore();

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetail(id as string);
  useEffect(() => {
    if (product) {
      setProduct(product);
      setSelectedVariant(product.productVariants[0]);
    }
  }, [product, setSelectedVariant, setProduct]);
  if (isError) {
    return <div>{isError}</div>;
  }

  return (
    <>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col p-10">
        <div className="flex flex-grow justify-between gap-8">
          <div className="flex flex-grow flex-col">
            <div className="relative flex flex-grow justify-between gap-8">
              <ProductDetailImageSection
                isLoading={isLoading}
                productVariants={product?.productVariants}
              />
              <div className="w-full">
                <ProductDetailSection
                  product={product!}
                  isLoading={isLoading}
                />
                <hr />
                <ShopSection shop={product?.shop} isLoading={isLoading} />
                <hr />
              </div>
            </div>
          </div>
          <ProductDetailActionSection
            shop={product?.shop}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
}
