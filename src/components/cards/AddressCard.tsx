import toast from "react-hot-toast";
import { IAddress } from "../../interfaces/IAddress";
import { useDeleteAddress } from "../../lib/useAddressQuery";
import Button from "../ui/Button";
import EditAddressModal from "../modals/EditAddressModal";

interface AddressCardProps {
  address: IAddress;
}

export default function AddressCard({ address }: AddressCardProps) {
  const deleteAddress = useDeleteAddress();

  const handleDelete = async () => {
    try {
      const message = await deleteAddress.mutateAsync({
        addressId: address._id,
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex w-full items-center justify-between rounded-lg px-6 py-4 shadow-all-sides">
        <div className="">
          <p className="text-sm font-bold">{address.addressLabel}</p>
          <p className="text-lg font-bold">{address.receiverName}</p>
          <p className="leading-tight tracking-tight">
            {address.receiverPhone}
          </p>
          <p className="leading-tight tracking-tight">{address.address}</p>
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
        <Button title="Choose" className="h-fit bg-green-600" size="large" />
      </div>
    </>
  );
}
