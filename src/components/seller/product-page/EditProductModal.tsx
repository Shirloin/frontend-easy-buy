import { MdOutlineModeEdit } from "react-icons/md";
import { IProduct } from "../../../interfaces/IProduct";
import Tabs from "../../Tabs";
import EditProductDetailForm from "./EditProductDetailForm";
import EditProductVariantForm from "./EditProductVariantForm";
import EditProductImageForm from "./EditProductImageForm";
import useEditProductStore from "../../../hooks/useEditProductStore";

interface EditProductModalProps {
  product: IProduct;
}

export default function EditProductModal({
  product: oldProduct,
}: EditProductModalProps) {
  const { product, setProduct } = useEditProductStore();

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
  const handleSubmit = () => {
    console.log(product);
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
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
