import { useParams } from "react-router-dom";
import { useGetProductDetail } from "../lib/useProductQuery";
import ProductDetailImageSection from "../components/product-detail-page/ProductDetailImageSection";
import ProductDetailSection from "../components/product-detail-page/ProductDetailSection";
import ProductDetailActionSection from "../components/product-detail-page/ProductDetailActionSection";
import { useProductDetailStore } from "../hooks/useProductDetailStore";

export default function ProductDetailPage() {
  const { id } = useParams();

  const { setSelectedVariant } = useProductDetailStore();

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetail(id as string);
  if (isError) {
    return <div>{isError}</div>;
  }
  if (product) {
    setSelectedVariant(product.productVariants[0]);
  }

  return (
    <>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col p-10">
        <div className="flex flex-grow justify-between gap-8">
          <div className="flex flex-grow flex-col">
            <div className="relative flex flex-grow justify-between gap-8">
              <ProductDetailImageSection
                productImages={product?.productImages}
                isLoading={isLoading}
              />
              <ProductDetailSection product={product!} isLoading={isLoading} />
            </div>
          </div>
          <ProductDetailActionSection isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}
