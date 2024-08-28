import { MdLocationOn } from "react-icons/md";
import AddressListModal from "../modals/AddressListModal";
import { useShipmentStore } from "../../hooks/useShipmentStore";
import Button from "../ui/Button";

export default function ShipmentAddressSection() {
  const { address } = useShipmentStore();

  return (
    <>
      <div className="flex flex-grow flex-col gap-2">
        <div className="flex w-full flex-col items-start rounded-lg bg-white p-5">
          {address && (
            <>
              <p className="font-bold uppercase text-gray-500">
                Shipment Address
              </p>
              <div className="my-4 leading-tight tracking-tight">
                <div className="flex items-center gap-1">
                  <MdLocationOn className="h-5 w-5 text-primary" />
                  <p className="font-bold">
                    {address?.addressLabel} . {address?.receiverName}
                  </p>
                </div>
                <p className="font-semibold">
                  {address?.address} {address?.receiverPhone}
                </p>
              </div>
            </>
          )}
          <AddressListModal />
        </div>
      </div>
    </>
  );
}
