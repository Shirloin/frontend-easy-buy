import { IProduct } from "../../../interfaces/IProduct"
import { IoTrashOutline } from "react-icons/io5"
import EditProductModal from "./EditProductModal"

interface ProductTableRowProps {
    index?: number
    product?: IProduct
}

export default function ProductTableRow({ index, product }: ProductTableRowProps) {


    return (
        <>
            <tr>
                <td>
                    {index}
                </td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={product?.productImages[0].imageUrl}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{product?.name}</div>
                            <div className="text-sm opacity-50">{product?.productVariants[0].name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {product?.productVariants[0].price}
                    <br />
                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>{product?.productCategory.name}</td>
                <td className="flex space-x-2">
                    <EditProductModal product={product!} />
                    <button className="p-3 rounded-md hover:bg-red-500 bg-red-500 text-white"><IoTrashOutline className="w-4 h-4" /></button>
                </td>
            </tr>

        </>
    )
}