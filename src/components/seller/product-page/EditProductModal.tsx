import { MdOutlineModeEdit } from "react-icons/md";
import { IProduct } from "../../../interfaces/IProduct";
import Tabs from "../../Tabs";
import EditProductDetailForm from "./EditProductDetailForm";
import EditProductVariantForm from "./EditProductVariantForm";
import EditProductImageForm from "./EditProductImageForm";
import useEditProductStore from "../../../hooks/useEditProductStore";
import ProductService from "../../../services/ProductService";
import { useQueryClient } from "@tanstack/react-query";

interface EditProductModalProps {
  product: IProduct;
}

export default function EditProductModal({
  product: oldProduct,
}: EditProductModalProps) {
  const { product, setProduct } = useEditProductStore();
  const queryClient = useQueryClient();

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
      const response = await ProductService.updateProduct(product);
      console.log(response);
      const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
      queryClient.invalidateQueries({ queryKey: ["myShopProducts"] });
    } catch (error) {
      console.log(error);
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
            <button
              onClick={handleSubmit}
              className="w-full rounded-md bg-primary px-12 py-2 text-sm font-bold text-white"
            >
              Save
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
