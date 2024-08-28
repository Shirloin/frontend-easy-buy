import { ICartItem } from "../../interfaces/ICartItem";
import { formatNumber } from "../../util/Util";

interface ShipmentItemCardProps {
  item: ICartItem;
}

export default function ShipmentItemCard({ item }: ShipmentItemCardProps) {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex items-start gap-6">
            <div className="flex items-start gap-2">
              <img
                className="h-20 w-20 rounded-md object-cover"
                src={item.variant.imageUrl}
                alt=""
              />
              <div className="text-sm font-semibold">
                <p>{item.variant.product.name}</p>
                <p>{item.variant.name}</p>
              </div>
            </div>
          </div>
          <p className="font-bold">
            {item.quantity} X Rp{formatNumber(item.variant.price)}
          </p>
        </div>
      </div>
    </>
  );
}
