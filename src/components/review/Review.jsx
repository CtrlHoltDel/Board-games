import { useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/user";

import useReview from "../../hooks/useReview";
import Loading from "../reusable/Loading";

import "../../styles/review/review.css";
import SingleReview from "./SingleReview";
import useComments from "../../hooks/useComments";
import CommentsList from "../reusable/CommentsList";

const Review = (props) => {
  const { user } = useContext(UserContext);

  const { reviewId } = useParams();
  const { item, liked, loading, toggleLike } = useReview(
    "reviews",
    reviewId,
    user.username
  );
  const { comments, commentsLoading } = useComments(
    `/reviews/${reviewId}/comments`
  );

  if (loading || commentsLoading)
    return <Loading class_name={"large-loading"} />;

  return (
    <>
      <SingleReview
        props={props}
        review={item}
        liked={liked}
        toggleLike={toggleLike}
        username={user.username}
      />
      <div className="review-comments-header">Comments</div>
      <CommentsList comments={comments} />
    </>
  );
};

export default Review;
