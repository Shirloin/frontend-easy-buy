import { useShipmentStore } from "../../hooks/useShipmentStore";
import ShipmentCard from "../cards/ShipmentCard";

export default function ShipmentItemListSection() {
  const { carts } = useShipmentStore();

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
