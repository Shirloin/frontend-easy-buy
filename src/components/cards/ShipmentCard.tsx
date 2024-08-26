import ShipmentItemCard from "./ShipmentItemCard";

export default function ShipmentCard() {
  return (
    <>
      <div className="flex w-full flex-col justify-center gap-6 rounded-lg bg-white p-5">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img className="h-6 w-6 rounded-md object-cover" src={""} alt="" />
            <p className="font-bold">"SkyPaps</p>
          </div>
        </div>
        <ShipmentItemCard />
      </div>
    </>
  );
}
