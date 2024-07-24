import { useState } from "react"

interface IVariant {
    name: string
    price: number
    stock: number
}

export default function ProductVariantForm() {

    const [variants, setVariants] = useState<IVariant[]>([])

    const addVariants = () => {
        setVariants([...variants, { name: '', price: 0, stock: 0 }]);
    }

    const removeVariant = (index: number) => {
        setVariants([...variants.slice(0, index), ...variants.slice(index + 1)]);
    }


    return (
        <>
            <div className="shadow-all-sides mt-4 flex w-full flex-col gap-6 rounded-md p-6">
                <div className="flex justify-between items-center gap-10">
                    <div className="max-w-60">
                        <h1 className="font-bold">Product Variant</h1>
                        <p className="text-xs">
                            Add variants so buyers can choose the right product, come on! Enter max. 5 types of variants.
                        </p>
                    </div>

                </div>
                <div className="w-full flex flex-col justify-center items-start gap-4">
                    {
                        variants.map((variant, index) => {
                            return (
                                <div key={index} className="w-full flex flex-col gap-4">
                                    <div className="w-full flex justify-between items-center">
                                        <h1 className="text-lg font-bold">Product Variant {index + 1}</h1>
                                        <button onClick={() => removeVariant(index)} className="px-8 py-2 rounded-md font-semibold text-center ring-1 ring-red-500 text-red-500">Remove</button>
                                    </div>
                                    <div className="w-full flex justify-between items-center gap-10 mb-4">
                                        <div className="max-w-60 w-full">
                                            <h1 className="font-bold">Product Variant Name</h1>
                                            <p className="text-xs">
                                                Product variant name min. 3 characters.
                                            </p>
                                        </div>
                                        <input
                                            className="w-full rounded-md p-2 ring-1 ring-gray-200"
                                            type="text"
                                        />
                                    </div>
                                    <div className="w-full flex justify-between items-center gap-10 mb-4">
                                        <div className="max-w-60 w-full">
                                            <h1 className="font-bold">Product Variant Price</h1>
                                            <p className="text-xs">
                                                Product variant price must be more than 0.
                                            </p>
                                        </div>
                                        <input
                                            className="w-full rounded-md p-2 ring-1 ring-gray-200"
                                            type="number"
                                        />
                                    </div>
                                    <div className="w-full flex justify-between items-center gap-10 mb-4">
                                        <div className="max-w-60 w-full">
                                            <h1 className="font-bold">Product Variant Stock</h1>
                                            <p className="text-xs">
                                                Product variant stock must be more than 0.
                                            </p>
                                        </div>
                                        <input
                                            className="w-full rounded-md p-2 ring-1 ring-gray-200"
                                            type="number"
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button onClick={addVariants} className="py-2 px-8 rounded-md text-center bg-white ring-1 ring-primary text-primary font-semibold">+ Add Variant</button>
                </div>
            </div>
        </>
    )
}