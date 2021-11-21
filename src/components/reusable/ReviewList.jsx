import SingleReviewCard from "./SingleReviewCard";

const ReviewList = ({ reviewList, ownProfile, likedPage }) => {
  return (
    <div className="review-list">
      {reviewList.map((review) => {
        return (
          <SingleReviewCard
            key={review.review_id}
            review={review}
            ownProfile={ownProfile}
            likedPage={likedPage}
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
