import ProductTable from "../../components/seller/product-page/ProductTable";
import { useAuth } from "../../contexts/AuthContext";
import { useGetAllProductsByShop } from "../../lib/useProductQuery";

export default function ProductPage() {

    const { user } = useAuth()
    console.log(user)

    const { data, isLoading, isError } = useGetAllProductsByShop(user?.shop?._id || "");
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
                            <ProductTable />
                        )
                    }
                </div>
            </div>
        </>
    )
}