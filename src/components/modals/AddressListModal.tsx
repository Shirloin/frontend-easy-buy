import { useGetAddress } from "../../lib/useAddressQuery";
import AddressCard from "../cards/AddressCard";
import Button from "../ui/Button";
import AddNewAddressModal from "./AddNewAddressModal";

export default function AddressListModal() {
  const { data: addresses, isLoading, error } = useGetAddress();

  const openModal = () => {
    const modal = document.getElementById(
      "address-list-modal",
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Button
        onClick={openModal}
        title="Choose Address"
        type="outline"
        className="w-fit"
      />
      <dialog id="address-list-modal" className="modal py-10">
        <div className="modal-box h-full w-11/12 max-w-3xl">
          <div className="flex">
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm absolute right-5 top-5">
                ✕
              </button>
            </form>
            <h3 className="w-full text-center text-2xl font-bold">
              Address List
            </h3>
          </div>
          <AddNewAddressModal className="mt-4 w-full" />
          <div className="my-4 flex flex-col gap-4">
            {addresses?.map((address) => (
              <AddressCard key={address._id} address={address} />
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
