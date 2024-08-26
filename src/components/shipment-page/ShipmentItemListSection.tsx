import ShipmentCard from "../cards/ShipmentCard";

export default function ShipmentItemListSection() {
  return (
    <>
      <div className="my-4 flex flex-col gap-4">
        <ShipmentCard />
        <ShipmentCard />
        <ShipmentCard />
      </div>
    </>
  );
}
