import ProductDetailForm from "../../components/seller/add-product-page/ProductDetailForm";
import ProductVariantForm from "../../components/seller/add-product-page/ProductVariantForm";
import useCreateProductStore from "../../hooks/useCreateProductStore";
import toast from "react-hot-toast";
import { useCreateProduct } from "../../lib/useProductQuery";
import Button from "../../components/ui/Button";

export default function AddProductPage() {
  const { product, productVariants } = useCreateProductStore();
  const createProductMutation = useCreateProduct();

  const handleSubmit = async () => {
    toast.loading("Please do not leave the page until it finish");
    try {
      const message = await createProductMutation.mutateAsync({
        product,
        productVariants,
      });
      toast.success(message);
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    } finally {
      toast.dismiss();
    }
  };

  return (
    <>
      <div className="mx-auto w-full max-w-4xl py-6">
        <h1 className="text-xl font-bold">Add Product</h1>
        <ProductDetailForm />
        <ProductVariantForm />
        <div className="mt-4 flex justify-end gap-4">
          <Button
            title="cancel"
            onClick={handleSubmit}
            type="cancel"
            className="max-w-28"
          />
          <Button
            title="save"
            onClick={handleSubmit}
            type="default"
            className="max-w-28"
          />
        </div>
      </div>
    </>
  );
}
