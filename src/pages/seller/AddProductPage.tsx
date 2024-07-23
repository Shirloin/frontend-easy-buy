export default function AddProductPage() {
    return (
        <>
            <div className="max-w-4xl w-full mx-auto py-6">
                <h1 className="font-bold text-xl">Add Product</h1>
                <div className="w-full flex flex-col gap-6 p-6 shadow-all-sides rounded-md mt-4">
                    <div className="flex gap-10 items-center">
                        <div className="max-w-60">
                            <h1 className="font-bold">Product Name</h1>
                            <p className="text-xs">Product name min.5 characters including brand, product type, color, or variant.</p>
                        </div>
                        <input className="rounded-md w-full ring-1 p-2 ring-gray-200" type="text" />
                    </div>
                    <div className="flex gap-10 items-center">
                        <div className="max-w-60">
                            <h1 className="font-bold">Product Category</h1>
                            <p className="text-xs">Product category min.5 characters including brand, product type, color, or variant.</p>
                        </div>
                        <input className="rounded-md w-full ring-1 p-2 ring-gray-200" type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}