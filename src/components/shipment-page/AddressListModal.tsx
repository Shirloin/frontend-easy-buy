import AddressCard from "../cards/AddressCard";
import Button from "../ui/Button";

export default function AddressListModal() {
  const openModal = () => {
    const modal = document.getElementById(
      "address-list-modal",
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <Button
        onClick={openModal}
        title="Change Address"
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
          <Button
            title="Add New Address"
            type="outline"
            className="mt-4 w-full"
            size="large"
          />
          <div className="my-4 flex flex-col gap-4">
            <AddressCard />
          </div>
        </div>
      </dialog>
    </>
  );
}
