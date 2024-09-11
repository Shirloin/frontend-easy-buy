import { useGetAddress } from "../../lib/useAddressQuery";
import AddressCard from "../cards/AddressCard";
import AddNewAddressModal from "../modals/AddNewAddressModal";

export default function AddressSection() {
  const { data: addresses, isLoading, error } = useGetAddress();
  if (isLoading) {
    return null;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div className="h-full w-full">
        <div className="flex items-center justify-between">
          <input
            className="w-96 rounded-md p-2 ring-1 ring-gray-300"
            placeholder="Search..."
            type="text"
          />
          <AddNewAddressModal />
        </div>
        <div className="mt-6 flex flex-col gap-4">
          {addresses?.map((address) => (
            <AddressCard key={address._id} address={address} />
          ))}
        </div>
      </div>
    </>
  );
}
