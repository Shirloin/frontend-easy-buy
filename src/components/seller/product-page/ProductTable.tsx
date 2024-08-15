import { IProduct } from "../../../interfaces/IProduct"
import ProductTableHeader from "./ProductTableHeader"
import ProductTableRow from "./ProductTableRow"

interface ProductTableProps {
    products?: IProduct[]
}

export default function ProductTable({ products }: ProductTableProps) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <ProductTableHeader />
                    <tbody>
                        <ProductTableRow index={1} />
                        <ProductTableRow index={2} />
                        <ProductTableRow index={3} />
                    </tbody>
                </table>
            </div>
        </>
    )
}