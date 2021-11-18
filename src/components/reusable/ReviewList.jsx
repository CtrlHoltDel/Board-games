import SingleReview from "./SingleReview";

const ReviewList = ({ reviewList, ownProfile, likedPage }) => {
  return (
    <div className="review-list">
      {reviewList.map((review) => {
        return (
          <SingleReview
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
