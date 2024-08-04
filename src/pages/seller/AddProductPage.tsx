import { useState } from "react";
import ProductDetailForm from "../../components/seller/add-product-page/ProductDetailForm";
import ProductImageForm from "../../components/seller/add-product-page/ProductImageForm";
import ProductVariantForm from "../../components/seller/add-product-page/ProductVariantForm";
import useCreateProductStore from "../../hooks/useCreateProductStore";
import ProductService from "../../services/ProductService";

export default function AddProductPage() {

    const { product, productVariants, productImages } = useCreateProductStore()

    const handleSubmit = async () => {
        try {
            const response = await ProductService.createProduct(product, productVariants, productImages)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="mx-auto w-full max-w-4xl py-6">
                <h1 className="text-xl font-bold">Add Product</h1>
                <ProductDetailForm />
                <ProductImageForm />
                <ProductVariantForm />
                <div className="mt-4 flex justify-end gap-4">
                    <button className="max-w-28 rounded-md px-12 py-2 text-sm font-bold text-gray-500 ring-1 ring-gray-300">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="max-w-28 rounded-md bg-primary px-12 py-2 text-sm font-bold text-white">
                        Save
                    </button>
                </div>
            </div>
        </>
    );
}
