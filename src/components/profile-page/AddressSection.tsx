import { ChangeEvent, useState } from "react";
import { useGetAddress } from "../../lib/useAddressQuery";
import AddressCard from "../cards/AddressCard";
import AddNewAddressModal from "../modals/AddNewAddressModal";
import { IAddress } from "../../interfaces/IAddress";

export default function AddressSection() {
  const { data: addresses, isLoading, error } = useGetAddress();
  const [searchTerm, setSearchTerm] = useState("");
  if (isLoading) {
    return null;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const filterAddresses = addresses?.filter((address: IAddress) =>
    [
      address.receiverName,
      address.addressLabel,
      address.street,
      address.receiverPhone,
    ].some((field) =>
      field.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
    ),
  );

  return (
    <>
      <div className="h-full w-full">
        <div className="flex items-center justify-between">
          <input
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            className="w-96 rounded-md p-2 ring-1 ring-gray-300"
            placeholder="Search..."
            type="text"
          />
          <AddNewAddressModal />
        </div>
        <div className="mt-6 flex flex-col gap-4">
          {filterAddresses?.map((address) => (
            <AddressCard key={address._id} address={address} />
          ))}
        </div>
      </div>
    </>
  );
}
