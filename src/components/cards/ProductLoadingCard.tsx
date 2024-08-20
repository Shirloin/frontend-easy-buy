import { IProduct } from "../../interfaces/IProduct";

export default function ProductLoadingCard() {
  return (
    <>
      <div className="h-80 w-44 rounded-md bg-white shadow-md">
        <div className="skeleton h-44 w-44 shrink-0 rounded-md" />
        <div className="flex flex-col gap-2 p-2">
          <p className="skeleton h-4 w-full"></p>
          <p className="skeleton h-4 w-full"></p>
          <div className="mt-2 flex items-center gap-2">
            <div className="skeleton h-5 w-5 shrink-0 rounded-full" />
            <p className="skeleton h-4 w-full"></p>
          </div>
        </div>
      </div>
    </>
  );
}
