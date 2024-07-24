export default function ProductDetailForm() {
    const categories = ["Shoes", "Fashion", "Electronics"];

    return (
        <>
            <div className="shadow-all-sides mt-4 flex w-full flex-col gap-6 rounded-md p-6">
                <div className="flex items-center gap-10">
                    <div className="max-w-60">
                        <h1 className="font-bold">Product Name</h1>
                        <p className="text-xs">
                            Product name min.5 characters including brand, product type,
                            color, or variant.
                        </p>
                    </div>
                    <input
                        className="w-full rounded-md p-2 ring-1 ring-gray-200"
                        type="text"
                    />
                </div>
                <div className="flex items-center gap-10">
                    <div className="max-w-60">
                        <h1 className="font-bold">Product Category</h1>
                        <p className="text-xs">
                            Product category min.5 characters including brand, product type,
                            color, or variant.
                        </p>
                    </div>
                    <div className=" relative w-full">
                        <input
                            className="w-full rounded-md p-2 ring-1 ring-gray-200"
                            type="text"
                        />
                        <div className=" hidden absolute mt-2 h-40 w-full rounded-xl border bg-white p-2">
                            {categories.map((category, index) => (
                                <div
                                    className="w-full text-start border-b rounded-md p-2 hover:bg-gray-100"
                                    key={index}
                                >
                                    <p className="font-semibold">{category}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="flex items-center gap-10">
                    <div className="max-w-60">
                        <h1 className="font-bold">Product Description</h1>
                        <p className="text-xs">
                            Make sure product description including the detail of your product
                            so customers can easily understand and find your product.
                        </p>
                    </div>
                    <textarea
                        className="h-28 max-h-28 w-full rounded-md p-2 ring-1 ring-gray-200"
                        name=""
                        id=""
                    ></textarea>
                </div>
            </div>
        </>
    );
}
