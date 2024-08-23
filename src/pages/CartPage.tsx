import CartActionSection from "../components/cart-page/CartActionSection";
import CartListSection from "../components/cart-page/CartListSection";

export default function CartPage() {
  return (
    <>
      <div className="flex flex-grow bg-slate-200/50">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-10 py-4">
          <h1 className="text-3xl font-bold">Cart</h1>
          <div className="flex w-full flex-grow justify-between gap-4 py-6">
            <CartListSection />
            <CartActionSection />
          </div>
        </div>
      </div>
    </>
  );
}
