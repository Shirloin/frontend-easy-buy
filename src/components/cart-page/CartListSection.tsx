import CartCard from "../cards/CartCard";
import Button from "../ui/Button";

export default function CartListSection() {
  const handleRemove = () => {};

  return (
    <>
      <div className="flex flex-grow flex-col gap-2">
        <div className="flex w-full items-center justify-between rounded-lg bg-white p-5">
          <div className="flex items-center gap-6">
            <input type="checkbox" className="h-5 w-5 accent-black ring-0" />
            <p className="font-bold">Choose All (1)</p>
          </div>
          <Button
            title="Remove"
            onClick={handleRemove}
            type="ghost"
            size="large"
          />
        </div>
        <CartCard />
      </div>
    </>
  );
}
