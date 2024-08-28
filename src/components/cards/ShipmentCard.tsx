import { ICart } from "../../interfaces/ICart";
import ShipmentItemCard from "./ShipmentItemCard";

interface ShipmentCardProps {
  cart: ICart;
}

export default function ShipmentCard({ cart }: ShipmentCardProps) {
  return (
    <>
      <div className="flex w-full flex-col justify-center gap-6 rounded-lg bg-white p-5">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              className="h-6 w-6 rounded-md object-cover"
              src={cart.shop.imageUrl}
              alt=""
            />
            <p className="font-bold">{cart.shop.name}</p>
          </div>
        </div>
        {cart.items.map((item) => (
          <ShipmentItemCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}
