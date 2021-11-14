import "../../styles/reviews/reviews.css";

import ReviewList from "./ReviewList";

import { useReviews } from "../../hooks/useReviews";
import CategoryPicker from "./CategoryPicker";
import OrderDropDown from "./OrderDropDown";
import SearchBar from "./SearchBar";
import Loading from "../reusable/Loading";

const Reviews = () => {
  const { reviewList, loading, pickCategory, sortReviews, search } =
    useReviews();

  const reviews = () => {
    return loading ? (
      <Loading class_name={"large-loading"} />
    ) : (
      <>
        <ReviewList reviewList={reviewList} />
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
      </div>
    </>
  );
};

export default Reviews;
