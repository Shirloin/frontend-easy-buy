import EditAddressModal from "../modals/EditAddressModal";
import Button from "../ui/Button";

interface AddressCard

export default function AddressCard() {
  return (
    <>
      <div
        className={`flex w-full items-center justify-between rounded-lg px-6 py-4 shadow-all-sides`}
      >
        <div className="">
          <p className="text-sm font-bold">asdfadf</p>
          <p className="text-lg font-bold">Riccardo</p>
          <p className="leading-tight tracking-tight">0456789</p>
          <p className="leading-tight tracking-tight">asdfasdf</p>
          <div className="mt-4 flex gap-8">
            <EditAddressModal address={address} />
            <Button
              onClick={handleDelete}
              title="Delete"
              type="ghost"
              className="text-green-500"
              size="large"
            />
          </div>
        </div>
      </div>
    </>
  );
}
