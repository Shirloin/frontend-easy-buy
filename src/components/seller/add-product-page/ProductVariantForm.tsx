export default function ProductVariantForm() {
    return (
        <>
            <div className="shadow-all-sides mt-4 flex w-full flex-col gap-6 rounded-md p-6">
                <div className="flex items-center gap-10">
                    <div className="max-w-60">
                        <h1 className="font-bold">Product Variant</h1>
                        <p className="text-xs">
                            Add variants so buyers can choose the right product, come on! Enter max. 2 types of variants.
                        </p>
                    </div>
                    <input
                        className="w-full rounded-md p-2 ring-1 ring-gray-200"
                        type="text"
                    />
                </div>


            </div>
        </>
    )
}