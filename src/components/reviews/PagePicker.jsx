import { useState } from "react";

const PagePicker = ({ pagesAmount, pagePicker }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pagesAmount; i++) {
      pageNumbers.push(
        <button
          style={{ textDecoration: currentPage === i && "underline" }}
          onClick={() => {
            if (!(currentPage === i)) {
              setCurrentPage(i);
              pagePicker(i);
            }
          }}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="reviews-main__page-picker">
      {pagesAmount > 1 && pages()}
    </div>
  );
};

export default PagePicker;
