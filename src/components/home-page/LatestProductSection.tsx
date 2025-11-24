import { useState, useEffect } from "react";
import { useGetAllProducts } from "../../lib/useProductQuery";
import ProductCard from "../cards/ProductCard";
import ProductLoadingCard from "../cards/ProductLoadingCard";
import useSearchStore from "../../hooks/useSearchStore";

const LIMIT = 25;

export default function LatestProductSection() {
  const { search } = useSearchStore();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetAllProducts(
    currentPage,
    LIMIT,
    search || undefined,
  );
  const products = data?.products;
  const pagination = data?.pagination;

  const totalPages = pagination?.totalPages || 1;

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="my-4 flex flex-wrap gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductLoadingCard key={index} />
          ))}
        </div>
      )}
      {products && products.length > 0 && (
        <div className="min-w-[500px]">
          <h1 className="text-lg font-bold lg:text-2xl">All Products</h1>
          <div className="my-4 flex flex-wrap gap-4">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          {totalPages > 0 && (
            <div className="mt-6 flex justify-center">
              <div className="join">
                <button
                  className="btn join-item btn-sm"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                >
                  ««
                </button>
                <button
                  className="btn join-item btn-sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  «
                </button>
                {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
                  let pageNumber: number;
                  if (totalPages <= 5) {
                    pageNumber = index + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = index + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + index;
                  } else {
                    pageNumber = currentPage - 2 + index;
                  }
                  return (
                    <button
                      key={pageNumber}
                      className={`btn join-item btn-sm ${
                        currentPage === pageNumber ? "btn-active" : ""
                      }`}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
                <button
                  className="btn join-item btn-sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  »
                </button>
                <button
                  className="btn join-item btn-sm"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  »»
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
