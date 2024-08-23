import { MdOutlineModeEdit } from "react-icons/md";
import { IProduct } from "../../../interfaces/IProduct";
import Tabs from "../../Tabs";
import EditProductDetailForm from "./EditProductDetailForm";
import EditProductVariantForm from "./EditProductVariantForm";
import EditProductImageForm from "./EditProductImageForm";
import useEditProductStore from "../../../hooks/useEditProductStore";
import ProductService from "../../../services/ProductService";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateProduct } from "../../../lib/useProductQuery";
import toast from "react-hot-toast";
import Button from "../../ui/Button";

interface EditProductModalProps {
  product: IProduct;
}

export default function EditProductModal({
  product: oldProduct,
}: EditProductModalProps) {
  const { product, setProduct } = useEditProductStore();
  const updateProductMutation = useUpdateProduct();

  const openModal = () => {
    setProduct(oldProduct);
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  const tabList: string[] = [
    "Product Detail",
    "Product Variant",
    "Product Image",
  ];
  const handleSubmit = async () => {
    try {
      const message = await updateProductMutation.mutateAsync(product);
      toast.success(message);
      const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="rounded-md bg-blue-500 p-3 text-white hover:bg-blue-500"
      >
        <MdOutlineModeEdit className="h-4 w-4" />
      </button>

      <dialog id="my_modal_2" className="modal py-10">
        <div className="modal-box min-h-full max-w-xl p-0">
          <Tabs tabList={tabList} tabContentStyle="py-4 px-6">
            <EditProductDetailForm />
            <EditProductVariantForm />
            <EditProductImageForm />
          </Tabs>
          <div className="mb-4 flex w-full max-w-xl justify-start gap-4 px-6">
            <Button className="w-full" title="Save" onClick={handleSubmit} />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
