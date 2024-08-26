import { formatNumber } from "../../util/Util";

export default function ShipmentItemCard() {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex items-start gap-6">
            <div className="flex items-start gap-2">
              <img
                className="h-20 w-20 rounded-md object-cover"
                src={""}
                alt=""
              />
              <div className="text-sm font-semibold">
                <p>Nike Air Max 97</p>
                <p>39</p>
              </div>
            </div>
          </div>
          <p className="font-bold">3 X Rp{formatNumber(1349999)}</p>
        </div>
      </div>
    </>
  );
}
