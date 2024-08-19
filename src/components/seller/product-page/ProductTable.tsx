import { IProduct } from "../../../interfaces/IProduct";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableRow from "./ProductTableRow";

interface ProductTableProps {
  products?: IProduct[];
}

export default function ProductTable({
  products = [] as IProduct[],
}: ProductTableProps) {
  return (
    <>
      <div className="overflow-x-auto">
        {products.length > 0 ? (
          <table className="table">
            {/* head */}
            <ProductTableHeader />
            <tbody>
              {products.map((product, index) => (
                <ProductTableRow
                  key={product._id}
                  product={product}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-sm font-bold">
            No Available Product
          </div>
        )}
      </div>
    </>
  );
}
