import { ChangeEvent, useEffect, useRef, useState } from "react";
import useCreateProductStore from "../../../hooks/useCreateProductStore";

export default function ProductDetailForm() {
    const categories = ["Shoes", "Fashion", "Electronics"];

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { product, setProductName, setProductCategory, setProductDescription } = useCreateProductStore()
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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
                        placeholder="Product Name"
                        value={product.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { setProductName(e.target.value) }}
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
                    <div ref={dropdownRef} className=" relative w-full">
                        <button onClick={() => setDropdownOpen(true)} className="w-full rounded-md border-2 border-gray-200 p-2 flex justify-between items-center">
                            <p>{product.category ? product.category : "Product Category"}</p>
                        </button>
                        {
                            dropdownOpen && (
                                <>

                                    <div className="absolute mt-2 h-40 w-full rounded-xl border bg-white p-2">
                                        {categories.map((category, index) => (
                                            <div
                                                className="w-full text-start border-b rounded-md p-2 hover:bg-gray-100"
                                                key={index}
                                                onClick={() => { setProductCategory(category); setDropdownOpen(false) }}
                                            >
                                                <p className="font-semibold">{category}</p>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )
                        }
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
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setProductDescription(e.target.value) }}
                    ></textarea>
                </div>
            </div>
        </>
    );
}
