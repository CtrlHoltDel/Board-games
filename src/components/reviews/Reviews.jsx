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
        <CategoryPicker addQuery={addQuery} />
        <ReviewList reviewList={reviewList} />
        <button
          className="reviews-main__load-more-button"
          onClick={() => {
            addQuery("category", "strategy");
          }}
        >
          Load more
        </button>
      </>
    );
  };

  return <div className="reviews-main">{reviews()}</div>;
};

export default Reviews;
