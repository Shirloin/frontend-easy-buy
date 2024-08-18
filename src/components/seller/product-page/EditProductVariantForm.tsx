import { ChangeEvent, useEffect, useState } from "react";
import { IProduct } from "../../../interfaces/IProduct";
import { ICreateProductVariant, IProductVariant } from "../../../interfaces/IProductVariant";
import { useEditProductVariantFormStore } from "../../../hooks/useEditProductVariantStore";

type VariantType = IProductVariant | ICreateProductVariant;

export default function EditProductVariantForm({ product }: { product: IProduct }) {

    const { variants, addProductVariant, updateProductVariant, deleteProductVariant, setProductVariants, handleSubmit } = useEditProductVariantFormStore((state) => state);

    useEffect(() => {
        setProductVariants(product.productVariants);
    }, [product.productVariants, setProductVariants]);

    return (
        <>
            <div className="flex w-full flex-col items-start justify-center gap-4">
                {variants.map((variant, index) => {
                    return (
                        <div key={index} className="flex w-full flex-col gap-4">
                            <div className="flex w-full items-center justify-between">
                                <h1 className=" font-bold">
                                    Product Variant {index + 1}
                                </h1>
                                <button
                                    onClick={() => deleteProductVariant(index)}
                                    className="rounded-md px-4 py-2 text-center font-semibold text-red-500 ring-1 ring-red-500"
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
                    className="rounded-md w-full bg-white px-4 py-2 text-center font-semibold text-primary ring-1 ring-primary"
                >
                    + Add Variant
                </button>
                <button onClick={handleSubmit} className="w-full rounded-md bg-primary px-12 py-2 text-sm font-bold text-white">
                    Save
                </button>
            </div>
        </>
    )
}