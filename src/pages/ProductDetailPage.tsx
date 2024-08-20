import { useParams } from "react-router-dom";
import { useGetProductDetail } from "../lib/useProductQuery";
import ProductDetailImageSection from "../components/product-detail-page/ProductDetailImageSection";

export default function ProductDetailPage() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetail(id as string);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{isError}</div>;
  }

  return (
    <>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col p-10">
        <div className="flex flex-grow justify-between">
          <ProductDetailImageSection productImages={product?.productImages} />
        </div>
      </div>
    </>
  );
}
