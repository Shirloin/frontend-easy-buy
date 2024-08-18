import { MdOutlineModeEdit } from "react-icons/md";
import { IProduct } from "../../../interfaces/IProduct";
import Tabs from "../../Tabs";
import EditProductDetailForm from "./EditProductDetailForm";
import EditProductVariantForm from "./EditProductVariantForm";

interface EditProductModalProps {
    product: IProduct
}

export default function EditProductModal({ product }: EditProductModalProps) {
    const openModal = () => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    const tabList: string[] = [
        "Product Detail",
        "Product Variant",
        "Product Image"
    ]

    return (
        <>
            <button onClick={openModal} className="p-3 rounded-md hover:bg-blue-500 bg-blue-500 text-white"><MdOutlineModeEdit className="w-4 h-4" /></button>

            <dialog id="my_modal_2" className="modal py-10">
                <div className="modal-box  p-0 min-h-full">
                    <Tabs tabList={tabList} tabContentStyle="p-4">
                        <EditProductDetailForm product={product} />
                        <EditProductVariantForm product={product} />
                        <div>Content for Tab 3</div>
                    </Tabs>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}