import { ChangeEvent } from "react";
import useEditProductStore from "../../../hooks/useEditProductStore";

export default function EditProductDetailForm() {
  const { product, setProductCategory, setProductName, setProductDescription } =
    useEditProductStore();
  return (
    <>
      <div className="flex flex-col space-y-4">
        <label htmlFor="name" className="font-bold">
          Product Name
        </label>
        <input
          className="w-full rounded-md p-2 ring-1 ring-gray-200"
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setProductName(e.target.value);
          }}
        />
        <label htmlFor="description" className="font-bold">
          Product Description
        </label>
        <textarea
          className="h-28 max-h-28 w-full rounded-md p-2 ring-1 ring-gray-200"
          value={product.description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setProductDescription(e.target.value);
          }}
        ></textarea>
        <label htmlFor="category" className="font-bold">
          Product Category
        </label>
        <input
          className="w-full rounded-md p-2 ring-1 ring-gray-200"
          type="text"
          placeholder="Product Category"
          value={product.productCategory.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setProductCategory(e.target.value);
          }}
        />
      </div>
    </>
  );
}
