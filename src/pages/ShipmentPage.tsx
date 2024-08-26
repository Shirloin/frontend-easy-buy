import ShipmentActionSection from "../components/shipment-page/ShipmentActionSection";
import ShipmentAddressSection from "../components/shipment-page/ShipmentAddressSection";

export default function ShipmentPage() {
  return (
    <>
      <div className="flex flex-grow bg-slate-200/50">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-10 py-4">
          <h1 className="text-3xl font-bold">Shipment</h1>
          <div className="flex w-full flex-grow justify-between gap-4 py-6">
            <div className="flex flex-grow gap-4">
              <ShipmentAddressSection />
            </div>
            <ShipmentActionSection />
          </div>
        </div>
      </div>
    </>
  );
}
