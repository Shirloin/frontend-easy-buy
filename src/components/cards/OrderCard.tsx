import { ITransactionHeader } from "../../interfaces/ITransaction";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { formatDate } from "../../util/Util";
import OrderDetailCard from "./OrderDetailCard";

interface OrderCardProps {
  order: ITransactionHeader;
  state?: "User" | "Shop";
}

export default function OrderCard({ order, state = "Shop" }: OrderCardProps) {
  return (
    <>
      <div className="mt-6 flex w-full flex-col gap-4 rounded-lg px-6 py-4 shadow-all-sides">
        <div className="flex gap-4">
          <HiOutlineShoppingBag className="h-6 w-6" />
          <p className="font-bold">Order</p>
          <p>{formatDate(order.date)}</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="h-6 w-6 rounded-md object-cover"
            src={order.shop.imageUrl}
            alt=""
          />
          <p className="font-bold">{order.shop.name}</p>
        </div>
        <div className="flex flex-col gap-4">
          {order.details.map((detail) => (
            <OrderDetailCard key={detail._id} detail={detail} state={state} />
          ))}
        </div>
      </div>
    </>
  );
}
