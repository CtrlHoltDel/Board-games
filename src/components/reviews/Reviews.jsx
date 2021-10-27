import '../../styles/reviews/reviews.css';

import ReviewList from './ReviewList';

import { useReviews } from '../../hooks/useReviews';

const Reviews = () => {
  const { reviewList, loading, loadMore } = useReviews();

  const reviews = () => {
    return loading ? (
      <div>Loading...</div>
    ) : (
      <>
        <ReviewList reviewList={reviewList} />
        <button onClick={loadMore}>Load more</button>
      </>
    );
  };

  return <div className="reviews-main">{reviews()}</div>;
};

export default Reviews;
