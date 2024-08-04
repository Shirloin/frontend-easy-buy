import { ChangeEvent, useState } from "react";
import useCreateProductStore from "../../../hooks/useCreateProductStore";

interface IVariant {
    name: string;
    price: number;
    stock: number;
}

export default function ProductVariantForm() {
    const [variants, setVariants] = useState<IVariant[]>([]);
    const { productVariants, addProductVariant, updateProductVariant, removeProductVariant } = useCreateProductStore()

    const addVariants = () => {
        setVariants([...variants, { name: "", price: 0, stock: 0 }]);
    };

    const removeVariant = (index: number) => {
        setVariants([...variants.slice(0, index), ...variants.slice(index + 1)]);
    };

    return (
        <>
            <div className="shadow-all-sides mt-4 flex w-full flex-col gap-6 rounded-md p-6">
                <div className="flex items-center justify-between gap-10">
                    <div className="max-w-60">
                        <h1 className="font-bold">Product Variant</h1>
                        <p className="text-xs">
                            Add variants so buyers can choose the right product, come on!
                            Enter max. 5 types of variants.
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-4">
                    {productVariants.map((variant, index) => {
                        return (
                            <div key={index} className="flex w-full flex-col gap-4">
                                <div className="flex w-full items-center justify-between">
                                    <h1 className="text-lg font-bold">
                                        Product Variant {index + 1}
                                    </h1>
                                    <button
                                        onClick={() => removeProductVariant(index)}
                                        className="rounded-md px-8 py-2 text-center font-semibold text-red-500 ring-1 ring-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className="mb-4 flex w-full items-center justify-between gap-10">
                                    <div className="w-full max-w-60">
                                        <h1 className="font-bold">Product Variant Name</h1>
                                        <p className="text-xs">
                                            Product variant name min. 3 characters.
                                        </p>
                                    </div>
                                    <input
                                        className="w-full rounded-md p-2 ring-1 ring-gray-200"
                                        type="text"
                                        placeholder="Product Variant Name"
                                        value={variant.name}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateProductVariant(index, "name", e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 flex w-full items-center justify-between gap-10">
                                    <div className="w-full max-w-60">
                                        <h1 className="font-bold">Product Variant Price</h1>
                                        <p className="text-xs">
                                            Product variant price must be more than 0.
                                        </p>
                                    </div>
                                    <input
                                        className="w-full rounded-md p-2 ring-1 ring-gray-200"
                                        type="number"
                                        placeholder="Product Variant Price"
                                        value={variant.price}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateProductVariant(index, "price", e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 flex w-full items-center justify-between gap-10">
                                    <div className="w-full max-w-60">
                                        <h1 className="font-bold">Product Variant Stock</h1>
                                        <p className="text-xs">
                                            Product variant stock must be more than 0.
                                        </p>
                                    </div>
                                    <input
                                        className="w-full rounded-md p-2 ring-1 ring-gray-200"
                                        type="number"
                                        placeholder="Product Variant Stock"
                                        value={variant.stock}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateProductVariant(index, "stock", e.target.value)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                    <button
                        onClick={addProductVariant}
                        className="rounded-md bg-white px-8 py-2 text-center font-semibold text-primary ring-1 ring-primary"
                    >
                        + Add Variant
                    </button>
                </div>
            </div>
        </>
    );
}
