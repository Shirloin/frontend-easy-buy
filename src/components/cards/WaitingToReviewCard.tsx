import useCreateReviewStore from "../../hooks/useCreateReviewStore";
import { ITransactionDetail } from "../../interfaces/ITransaction";
import { formatNumber } from "../../util/Util";
import Button from "../ui/Button";

interface WaitingToReviewCardProps {
  detail: ITransactionDetail;
}

export default function WaitingToReviewCard({
  detail,
}: WaitingToReviewCardProps) {
  const { setOrder } = useCreateReviewStore();
  return (
    <>
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex gap-4">
          <img className="h-16 w-16" src={detail.variant.imageUrl} alt="" />
          <div className="text-sm font-semibold leading-tight text-primary">
            <p>{detail.product.name}</p>
            <p>{detail.variant.name}</p>
            <p>Rp{formatNumber(detail.variant.price & detail.quantity)}</p>
          </div>
        </div>
        <Button
          onClick={() => {
            setOrder(detail);
          }}
          className="h-fit"
          title="Review"
          size="large"
        />
      </div>
    </>
  );
}
