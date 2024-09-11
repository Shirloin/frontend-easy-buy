import toast from "react-hot-toast";
import { useCreateAddress } from "../../lib/useAddressQuery";
import Button from "../ui/Button";
import { useCreateAddressStore } from "../../hooks/useCreateAddressStore";
import { ChangeEvent } from "react";

interface AddNewAddressModalProps {
  className?: string;
}

export default function AddNewAddressModal({
  className,
}: AddNewAddressModalProps) {
  const createAddress = useCreateAddress();
  const { address, setAddress } = useCreateAddressStore();

  const openModal = () => {
    const modal = document.getElementById(
      "add-new-address-modal",
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById(
      "add-new-address-modal",
    ) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  const handleSubmit = async () => {
    try {
      const message = await createAddress.mutateAsync({ address });
      toast.success(message);
      closeModal();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Button
        title="Add New Address"
        type="outline"
        className={className}
        size="large"
        onClick={openModal}
      />
      <dialog id="add-new-address-modal" className="modal">
        <div className="modal-box h-full w-11/12 max-w-3xl p-0">
          <div className="sticky top-0 bg-white pt-6">
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm absolute right-5 top-5">
                ✕
              </button>
            </form>
            <h3 className="w-full text-center text-2xl font-bold">
              Add New Address
            </h3>
            <hr className="border-black" />
          </div>
          <div className="my-4 flex flex-col gap-4 px-6">
            <label htmlFor="name" className="font-bold">
              Receiver Name
            </label>
            <input
              id="name"
              className="w-full rounded-md p-2 ring-1 ring-gray-200"
              type="text"
              placeholder="Receiver Name"
              value={address.receiverName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAddress("receiverName", e.target.value)
              }
            />
            <label htmlFor="phone" className="font-bold">
              Receiver Phone
            </label>
            <input
              id="phone"
              className="w-full rounded-md p-2 ring-1 ring-gray-200"
              type="text"
              placeholder="Receiver Phone"
              value={address.receiverPhone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAddress("receiverPhone", e.target.value)
              }
            />
            <label htmlFor="address-label" className="font-bold">
              Address Label
            </label>
            <input
              id="address-label"
              className="w-full rounded-md p-2 ring-1 ring-gray-200"
              type="text"
              placeholder="Address Label"
              value={address.addressLabel}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAddress("addressLabel", e.target.value)
              }
            />
            <label htmlFor="complete-address" className="font-bold">
              Complete Address
            </label>
            <textarea
              id="complete-address"
              className="h-28 max-h-28 w-full rounded-md p-2 ring-1 ring-gray-200"
              placeholder="Complete Address"
              value={address.street}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setAddress("street", e.target.value)
              }
            ></textarea>

            <Button
              onClick={handleSubmit}
              title="Save"
              size="large"
              className="my-4 py-2.5 text-lg"
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
