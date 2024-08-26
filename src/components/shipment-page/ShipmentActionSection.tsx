import { formatNumber } from "../../util/Util";
import Button from "../ui/Button";

export default function ShipmentActionSection() {
  const handleSubmit = () => {};

  return (
    <>
      <div className="sticky top-28 h-fit w-full min-w-96 max-w-96 rounded-xl bg-white p-4">
        <p className="text-lg font-bold">Shopping Summary</p>
        <div className="mt-8 flex items-center justify-between">
          <p>Total Price (3 Products)</p>
          <p className="text-lg font-bold">Rp{formatNumber(10000)}</p>
        </div>
        <hr />
        <Button
          title="Choose Payment"
          onClick={handleSubmit}
          className="w-full text-xl font-bold"
        />
      </div>
    </>
  );
}
