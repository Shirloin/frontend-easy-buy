import ProductDetailForm from "../../components/seller/add-product-page/ProductDetailForm";
import ProductImageForm from "../../components/seller/add-product-page/ProductImageForm";

export default function AddProductPage() {

    return (
        <>
            <div className="mx-auto w-full max-w-4xl py-6">
                <h1 className="text-xl font-bold">Add Product</h1>
                <ProductDetailForm />
                <ProductImageForm />
            </div>
        </>
    );
}
