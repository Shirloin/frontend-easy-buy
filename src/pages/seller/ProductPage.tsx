import ProductTable from "../../components/seller/product-page/ProductTable";
import { useGetMyShopProduct } from "../../lib/useProductQuery";

export default function ProductPage() {

    const { data: products, isLoading, isError } = useGetMyShopProduct();
    if (isError) {
        throw isError
    }
    return (
        <>
            <div className="mx-auto w-full max-w-4xl py-6">
                <h1 className="text-xl font-bold">All Product</h1>
                <div className="shadow-all-sides mt-4 flex w-full flex-col gap-6 rounded-md p-6">
                    {
                        isLoading ? (
                            <>
                                <h1>Loading...</h1>
                            </>
                        ) : (
                            <ProductTable products={products} />
                        )
                    }
                </div>
            </div>
        </>
    )
}