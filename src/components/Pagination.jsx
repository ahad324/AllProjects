import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../styles/Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(i);
      } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
        pageNumbers.push("...");
      }
    }

    return pageNumbers.map((number, index) =>
      number === "..." ? (
        <span key={index} className="pagination-ellipsis">
          ...
        </span>
      ) : (
        <button
          key={crypto.randomUUID()}
          onClick={() => onPageChange(number)}
          className={`pagination-page ${
            currentPage === number ? "pagination-active" : ""
          }`}
        >
          {number}
        </button>
      )
    );
  };

  return (
    <div className="pagination-wrapper">
      <button
        onClick={handlePreviousPage}
        className="pagination-arrow"
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </button>

      {renderPageNumbers()}

      <button
        onClick={handleNextPage}
        className="pagination-arrow"
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </button>
    </div>
  );
}

export default Pagination;
