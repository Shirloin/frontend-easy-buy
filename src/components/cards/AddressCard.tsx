import toast from "react-hot-toast";
import { IAddress } from "../../interfaces/IAddress";
import { useDeleteAddress } from "../../lib/useAddressQuery";
import Button from "../ui/Button";
import EditAddressModal from "../modals/EditAddressModal";
import { useShipmentStore } from "../../hooks/useShipmentStore";
import { IoMdCheckmark } from "react-icons/io";

interface AddressCardProps {
  address: IAddress;
}

export default function AddressCard({ address }: AddressCardProps) {
  const deleteAddress = useDeleteAddress();

  const { address: selectedAddress, setAddress } = useShipmentStore();

  const handleDelete = async () => {
    try {
      await deleteAddress.mutateAsync({
        addressId: address._id,
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const selectAddress = () => {
    setAddress(address);
    const modal = document.getElementById(
      "address-list-modal",
    ) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <div
        className={`flex w-full items-center justify-between rounded-lg px-6 py-4 shadow-all-sides ${selectedAddress?._id === address._id ? "bg-green-100/50 ring-1 ring-primary" : ""}`}
      >
        <div className="">
          <p className="text-sm font-bold">{address.addressLabel}</p>
          <p className="text-lg font-bold">{address.receiverName}</p>
          <p className="leading-tight tracking-tight">
            {address.receiverPhone}
          </p>
          <p className="leading-tight tracking-tight">{address.street}</p>
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
        {selectedAddress?._id === address._id ? (
          <IoMdCheckmark className="h-6 w-6 font-light text-primary" />
        ) : (
          <Button
            title="Choose"
            className="h-fit bg-green-600"
            size="large"
            onClick={selectAddress}
          />
        )}
      </div>
    </>
  );
}
