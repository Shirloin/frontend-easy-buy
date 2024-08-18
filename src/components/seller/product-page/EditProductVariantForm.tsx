import { ChangeEvent, useState } from "react";
import { IProduct } from "../../../interfaces/IProduct";
import { ICreateProductVariant, IProductVariant } from "../../../interfaces/IProductVariant";

type VariantType = IProductVariant | ICreateProductVariant;

export default function EditProductVariantForm({ product }: { product: IProduct }) {

    const initialVariants: ICreateProductVariant = {
        name: "",
        price: 0,
        stock: 0,
    }

    const [variants, setVariants] = useState<VariantType[]>(product.productVariants)

    const addProductVariant = () => {
        const newVariant: ICreateProductVariant = initialVariants
        setVariants([...variants, newVariant])
    }

    const updateProductVariant = (index: number, field: string, val: any) => {
        const updatedVariants = [...variants];
        updatedVariants[index] = {
            ...updatedVariants[index],
            [field]: field === "price" || field === "stock" ? Number(val) : val
        };
        setVariants(updatedVariants);
    }

    const deleteProductVariant = (index: number) => {
        const updatedVariants = variants.filter((_, i) => i !== index);
        setVariants(updatedVariants);
    }

    return (
        <>
            <div className="flex w-full flex-col items-start justify-center gap-4">
                {variants.map((variant, index) => {
                    return (
                        <div key={index} className="flex w-full flex-col gap-4">
                            <div className="flex w-full items-center justify-between">
                                <h1 className="text-lg font-bold">
                                    Product Variant {index + 1}
                                </h1>
                                <button
                                    onClick={() => deleteProductVariant(index)}
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
        </>
    )
}