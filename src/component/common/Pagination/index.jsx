import React, { useState } from "react";
import "./style.css";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPages = () => {
    let pages = [];

    if (totalPages <= 6) {
      // agar total pages kam hai to sab dikhao
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "...right", totalPages - 1, totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, 2, "...left", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [
          1,
          "...left",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...right",
          totalPages,
        ];
      }
    }

    return pages.map((page, index) => {
      if (typeof page === "string" && page.includes("...")) {
        return (
          <button
            key={index}
            className="dots"
            onClick={() => {
              if (page === "...left") {
                // start aur currentPage ke bich ka midpoint
                const mid = Math.floor((1 + currentPage) / 2);
                goToPage(mid);
              } else if (page === "...right") {
                // currentPage aur totalPages ke bich ka midpoint
                const mid = Math.floor((currentPage + totalPages) / 2);
                goToPage(mid);
              }
            }}
          >
            ...
          </button>
        );
      } else {
        return (
          <button
            key={index}
            className={`page-btn ${currentPage === page ? "active" : ""}`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        );
      }
    });
  };

  return (
    <div className="pagination">
      <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>
      {renderPages()}
      <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
