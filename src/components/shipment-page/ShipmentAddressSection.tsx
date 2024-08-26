import { MdLocationOn } from "react-icons/md";
import AddressListModal from "../modals/AddressListModal";

export default function ShipmentAddressSection() {
  return (
    <>
      <div className="flex flex-grow flex-col gap-2">
        <div className="flex w-full flex-col items-start rounded-lg bg-white p-5">
          <p className="font-bold uppercase text-gray-500">Shipment Address</p>
          <div className="my-4 leading-tight tracking-tight">
            <div className="flex items-center gap-1">
              <MdLocationOn className="h-5 w-5 text-primary" />
              <p className="font-bold">Rumah . Riccardo</p>
            </div>
            <p className="font-semibold">
              Jl. Rw. Belong No.4, RT.1/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota
              Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
            </p>
          </div>
          <AddressListModal />
        </div>
      </div>
    </>
  );
}
