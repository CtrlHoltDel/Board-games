const PagePicker = ({ pagesAmount, pagePicker, currPage, setCurrPage }) => {
  const pages = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pagesAmount; i++) {
      pageNumbers.push(
        <button
          key={i}
          style={{ textDecoration: currPage === i && "underline" }}
          onClick={() => {
            if (!(currPage === i)) {
              setCurrPage(i);
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

  if (pagesAmount < 1) return <div></div>;

  return (
    <div className="reviews-main__page-picker">
      {pagesAmount > 1 && pages()}
    </div>
  );
};

export default PagePicker;
