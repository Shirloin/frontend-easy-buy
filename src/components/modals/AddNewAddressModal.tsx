import Button from "../ui/Button";

export default function AddNewAddressModal() {
  const openModal = () => {
    const modal = document.getElementById(
      "add-new-address-modal",
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <>
      <Button
        title="Add New Address"
        type="outline"
        className="mt-4 w-full"
        size="large"
        onClick={openModal}
      />
      <dialog id="add-new-address-modal" className="modal py-20">
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
            />
            <label htmlFor="phone" className="font-bold">
              Receiver Phone
            </label>
            <input
              id="phone"
              className="w-full rounded-md p-2 ring-1 ring-gray-200"
              type="number"
              placeholder="Receiver Phone"
            />
            <label htmlFor="address-label" className="font-bold">
              Address Label
            </label>
            <input
              id="address-label"
              className="w-full rounded-md p-2 ring-1 ring-gray-200"
              type="text"
              placeholder="Address Label"
            />
            <label htmlFor="complete-address" className="font-bold">
              Complete Address
            </label>
            <textarea
              id="complete-address"
              className="h-28 max-h-28 w-full rounded-md p-2 ring-1 ring-gray-200"
              placeholder="Complete Address"
            ></textarea>

            <Button title="Save" size="large" className="my-4 py-2.5 text-lg" />
          </div>
        </div>
      </dialog>
    </>
  );
}
