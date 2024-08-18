import { MdOutlineModeEdit } from "react-icons/md";
import { IProduct } from "../../../interfaces/IProduct";

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

    return (
        <>
            <button onClick={openModal} className="p-3 rounded-md hover:bg-blue-500 bg-blue-500 text-white"><MdOutlineModeEdit className="w-4 h-4" /></button>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            Tab content 1
                        </div>

                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab"
                            aria-label="Tab 2"
                            defaultChecked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            Tab content 2
                        </div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            Tab content 3
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
