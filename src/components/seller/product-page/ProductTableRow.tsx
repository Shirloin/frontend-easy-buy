import { IProduct } from "../../../interfaces/IProduct";
import { IoTrashOutline } from "react-icons/io5";
import EditProductModal from "./EditProductModal";
import { useState, useRef, useEffect } from "react";
import { useDeleteProduct } from "../../../lib/useProductQuery";
import toast from "react-hot-toast";

interface ProductTableRowProps {
  index?: number;
  product?: IProduct;
}

export default function ProductTableRow({
  index,
  product,
}: ProductTableRowProps) {
  const deleteProductMutation = useDeleteProduct();

  const handleDelete = async () => {
    try {
      const message = await deleteProductMutation.mutateAsync(product!._id);
      toast.success(message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <tr>
        <td>{index}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={product?.productImages[0].imageUrl}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{product?.name}</div>
              <div className="text-sm opacity-50">
                {product?.productVariants[0].name}
              </div>
            </div>
          </div>
        </td>
        <td className="font-bold">
          {product?.productVariants[0].price}
          <br />
          {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
        </td>
        <td className="font-bold">{product?.productCategory.name}</td>
        <td className="flex space-x-2">
          <EditProductModal product={product!} />
          <button
            onClick={handleDelete}
            className="rounded-md bg-red-500 p-3 text-white hover:bg-red-500"
          >
            <IoTrashOutline className="h-4 w-4" />
          </button>
        </td>
      </tr>
    </>
  );
}
