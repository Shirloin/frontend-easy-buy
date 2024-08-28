import { ITransactionDetail } from "../../interfaces/ITransaction";
import { formatNumber } from "../../util/Util";

interface OrderDetailCardProps {
  detail: ITransactionDetail;
}

export default function OrderDetailCard({ detail }: OrderDetailCardProps) {
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
      </div>
    </>
  );
}
