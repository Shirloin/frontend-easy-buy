import { IProduct } from "../../../interfaces/IProduct"
import ProductTableHeader from "./ProductTableHeader"
import ProductTableRow from "./ProductTableRow"

interface ProductTableProps {
    products?: IProduct[]
}

export default function ProductTable({ products }: ProductTableProps) {
    console.log(products)
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <ProductTableHeader />
                    <tbody>
                        {
                            products && products.map((product) => (
                                <ProductTableRow key={product._id} product={product} index={1} />

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}