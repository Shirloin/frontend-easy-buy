import { useGetTransactionWithReview } from "../../lib/useTransactionQuery";

export default function MyReviewSection() {
  const { data } = useGetTransactionWithReview();
  console.log(data);
  return (
    <>
      <div>My Review</div>
    </>
  );
}
