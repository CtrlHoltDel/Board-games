import "../../styles/reviews/reviews.css";

import ReviewList from "./ReviewList";

import { useReviews } from "../../hooks/useReviews";
import CategoryPicker from "./CategoryPicker";

const Reviews = () => {
  const { reviewList, loading, addQuery } = useReviews();

  const reviews = () => {
    return loading ? (
      <div>Loading...</div>
    ) : (
      <>
        <ReviewList reviewList={reviewList} />
      </>
    );
  };

  return (
    <>
      <div className="reviews-main">
        <CategoryPicker addQuery={addQuery} />
        {reviews()}
      </div>
    </>
  );
};

export default Reviews;
