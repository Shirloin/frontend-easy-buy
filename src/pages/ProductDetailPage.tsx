import { useParams } from "react-router-dom";
import { useGetProductDetail } from "../lib/useProductQuery";
import ProductDetailImageSection from "../components/product-detail-page/ProductDetailImageSection";
import ProductDetailSection from "../components/product-detail-page/ProductDetailSection";
import ProductDetailActionSection from "../components/product-detail-page/ProductDetailActionSection";
import { useProductDetailStore } from "../hooks/useProductDetailStore";
import { useEffect } from "react";
import ShopSection from "../components/product-detail-page/ShopSection";
import RelatedProductSection from "../components/product/RelatedProductSection";
import {
  useGetProductRating,
  useGetReviewByProduct,
} from "../lib/useReviewQuery";
import UserReviewSection from "../components/product-detail-page/UserReviewSection";

export default function ProductDetailPage() {
  const { id } = useParams();

  const { setSelectedVariant, setProduct } = useProductDetailStore();

  const {
    data: product,
    isLoading: isProductLoading,
    error,
  } = useGetProductDetail(id as string);
  const { data: reviews, isLoading: isReviewLoading } = useGetReviewByProduct(
    id as string,
  );
  const { data: productRating, isLoading: isProductRatingLoading } =
    useGetProductRating(id as string);
  const isLoading =
    isProductLoading || isReviewLoading || isProductRatingLoading;
  useEffect(() => {
    if (product) {
      setProduct(product);
      setSelectedVariant(product.productVariants[0]);
    }
  }, [product, setSelectedVariant, setProduct]);
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col p-10">
        <div className="flex flex-grow justify-between gap-8">
          <div className="flex flex-grow flex-col">
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
                  <ShopSection
                    shop={product?.shop}
                    isLoading={isLoading}
                    productRating={productRating}
                  />
                  <hr />
                </div>
              </div>
            </div>
            <UserReviewSection
              reviews={reviews}
              productRating={productRating}
            />
          </div>
          <ProductDetailActionSection
            shop={product?.shop}
            isLoading={isLoading}
          />
        </div>
        <hr />
        {product?.productCategory._id && (
          <RelatedProductSection categoryId={product.productCategory._id} />
        )}
      </div>
    </>
  );
}
