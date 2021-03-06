import "../../styles/reviews/reviews.css";

import ReviewList from "../reusable/ReviewList";

import { useReviews } from "../../hooks/useReviews";
import CategoryPicker from "./CategoryPicker";
import OrderDropDown from "./OrderDropDown";
import SearchBar from "./SearchBar";
import Loading from "../reusable/Loading";
import PagePicker from "../reusable/PagePicker";

const Reviews = () => {
  const {
    reviewList,
    loading,
    pickCategory,
    sortReviews,
    search,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
  } = useReviews("/reviews");

  const reviews = () => {
    return loading ? (
      <Loading class_name={"large-loading"} />
    ) : (
      <>
        {!reviewList.length ? (
          <div>No Reviews Matching that search</div>
        ) : (
          <ReviewList reviewList={reviewList} />
        )}
      </>
    );
  };

  return (
    <>
      <div className="reviews-main">
        <CategoryPicker pickCategory={pickCategory} />
        <OrderDropDown sortReviews={sortReviews} />
        <SearchBar search={search} />
        {reviews()}
        <PagePicker
          pagesAmount={pagesAmount}
          pagePicker={pagePicker}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      </div>
    </>
  );
};

export default Reviews;
