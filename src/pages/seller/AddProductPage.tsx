import ProductDetailForm from "../../components/seller/add-product-page/ProductDetailForm";
import ProductImageForm from "../../components/seller/add-product-page/ProductImageForm";
import ProductVariantForm from "../../components/seller/add-product-page/ProductVariantForm";

export default function AddProductPage() {

    return (
        <>
            <div className="mx-auto w-full max-w-4xl py-6">
                <h1 className="text-xl font-bold">Add Product</h1>
                <ProductDetailForm />
                <ProductImageForm />
                <ProductVariantForm />
                <div className="flex justify-end gap-4 mt-4 ">
                    <button className="text-gray-500 ring-1 font-bold  ring-gray-300 max-w-40 px-16 py-2 rounded-md text-sm">Cancel</button>
                    <button className="text-white bg-primary  font-bold   max-w-40 px-16 py-2 rounded-md text-sm">Save</button>
                </div>
            </div>
        </>
    );
}
