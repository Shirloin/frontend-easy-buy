import { ChangeEvent, useState } from "react";
import { IProduct } from "../../../interfaces/IProduct";

export default function EditProductDetailForm({ product }: { product: IProduct }) {

    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description)
    const [category, setCategory] = useState(product.productCategory.name)

    const handleSubmit = () => {

    }

    return (
        <>
            <div className="flex flex-col space-y-4">
                <label htmlFor="name" className="font-bold">Product Name</label>
                <input
                    className="w-full rounded-md p-2 ring-1 ring-gray-200"
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }}
                />
                <label htmlFor="description" className="font-bold">Product Description</label>
                <textarea
                    className="h-28 max-h-28 w-full rounded-md p-2 ring-1 ring-gray-200"
                    value={description}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setDescription(e.target.value) }}
                ></textarea>
                <label htmlFor="category" className="font-bold">Product Category</label>
                <input
                    className="w-full rounded-md p-2 ring-1 ring-gray-200"
                    type="text"
                    placeholder="Product Category"
                    value={category}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setCategory(e.target.value) }}
                />
                <button onClick={handleSubmit} className=" rounded-md bg-primary px-12 py-2 text-sm font-bold text-white">
                    Save
                </button>
            </div>
        </>
    )
}