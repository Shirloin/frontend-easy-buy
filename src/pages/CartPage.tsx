import toast from "react-hot-toast";
import CartActionSection, {
  CartActionLoading,
} from "../components/cart-page/CartActionSection";
import CartListSection, {
  CartListLoading,
} from "../components/cart-page/CartListSection";
import { useGetCart } from "../lib/useCartQuery";
import { useEffect } from "react";
import { useCartStore } from "../hooks/useCartStore";

export default function CartPage() {
  const { data: carts = [], isLoading, isError } = useGetCart();
  const { initializeCartItems } = useCartStore();

  useEffect(() => {
    if (carts.length > 0) {
      initializeCartItems(carts);
    }
  }, [carts, initializeCartItems]);
  if (isLoading) {
    return <CartLoading />;
  }
  if (isError) {
    console.log(isError);
  }

  return (
    <>
      <div className="flex flex-grow bg-slate-200/50">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-10 py-4">
          <h1 className="text-3xl font-bold">Cart</h1>
          <div className="flex w-full flex-grow justify-between gap-4 py-6">
            <CartListSection carts={carts} />
            <CartActionSection />
          </div>
        </div>
      </div>
    </>
  );
}

function CartLoading() {
  return (
    <>
      <div className="flex flex-grow bg-slate-200/50">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-10 py-4">
          <h1 className="skeleton h-6 w-60"></h1>
          <div className="flex w-full flex-grow justify-between gap-4 py-6">
            <CartListLoading />
            <CartActionLoading />
          </div>
        </div>
      </div>
    </>
  );
}
