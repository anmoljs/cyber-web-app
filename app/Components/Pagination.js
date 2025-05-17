// components/Pagination.js
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex justify-center py-8 gap-2 items-center flex-wrap">
      {/* Prev */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="p-2   disabled:opacity-50"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {/* First Page */}
      <button
        onClick={() => setCurrentPage(1)}
        className={`px-3 py-1  h-[32px] w-[32px] rounded-[5px] gap-[8px] ${
          currentPage === 1 ? "bg-black text-white" : ""
        }`}
      >
        1
      </button>

      {/* Ellipsis before */}
      {currentPage > 3 && <span className="px-2">...</span>}

      {/* Middle Pages */}
      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter(
          (page) =>
            page !== 1 &&
            page !== totalPages &&
            page >= currentPage - 1 &&
            page <= currentPage + 1
        )
        .map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1  h-[32px] w-[32px] rounded-[5px] gap-[8px] ${
              currentPage === page ? "bg-black text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}

      {/* Ellipsis after */}
      {currentPage < totalPages - 2 && <span className="px-2">...</span>}

      {/* Last Page */}
      {totalPages > 1 && (
        <button
          onClick={() => setCurrentPage(totalPages)}
          className={` py-1  h-[32px] w-[32px] rounded-[5px] gap-[8px] ${
            currentPage === totalPages ? "bg-black text-white" : ""
          }`}
        >
          {totalPages}
        </button>
      )}

      {/* Next */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="p-2  disabled:opacity-50"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;




