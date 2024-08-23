import CartActionSection from "../components/cart-page/CartActionSection";

export default function CartPage() {
  return (
    <>
      <div className="flex flex-grow bg-slate-200/50">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-10 py-4">
          <h1 className="text-3xl font-bold">Cart</h1>
          <div className="flex w-full flex-grow justify-between gap-4 py-6">
            <div className="h-full w-full bg-blue-500"></div>
            <CartActionSection />
          </div>
        </div>
      </div>
    </>
  );
}
