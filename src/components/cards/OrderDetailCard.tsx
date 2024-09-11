import { ITransactionDetail } from "../../interfaces/ITransaction";
import { formatNumber } from "../../util/Util";
import Button from "../ui/Button";

interface OrderDetailCardProps {
  detail: ITransactionDetail;
  state?: "Shop" | "User";
}

export default function OrderDetailCard({
  detail,
  state = "Shop",
}: OrderDetailCardProps) {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-start gap-2">
              <img
                className="h-16 w-16 rounded-md object-cover"
                src={detail.variant.imageUrl}
                alt=""
              />
              <div>
                <p className="font-semibold">
                  {detail.product.name} - {detail.variant.name}
                </p>
                <p className="text-sm text-gray-500">
                  {detail.quantity} item X Rp
                  {formatNumber(detail.variant.price)}
                </p>
              </div>
            </div>
          </div>
          <p className="font-bold">
            Rp{formatNumber(detail.variant.price * (detail.quantity ?? 1))}
          </p>
        </div>
        {state === "User" && (
          <div className="flex items-center justify-end gap-4">
            <Button type="outline" title="Review" />
            <Button title="Buy More" />
          </div>
        )}
      </div>
    </>
  );
}
