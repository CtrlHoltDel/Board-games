import { useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/user";

import useReview from "../../hooks/useReview";
import Loading from "../reusable/Loading";

import "../../styles/review/review.css";
import SingleReview from "./SingleReview";
import useComments from "../../hooks/useComments";
import CommentsList from "../reusable/CommentsList";
import SubmitComment from "../reusable/SubmitComment";

const Review = (props) => {
  const {
    user: { username },
  } = useContext(UserContext);

  const { reviewId } = useParams();
  const { item, liked, loading, toggleLike } = useReview(
    "reviews",
    reviewId,
    username
  );
  const { comments, commentsLoading, addComment } = useComments(
    `/reviews/${reviewId}/comments`
  );

  if (loading || commentsLoading)
    return <Loading class_name={"large-loading"} />;

  return (
    <div>
      <SingleReview
        props={props}
        review={item}
        liked={liked}
        toggleLike={toggleLike}
        username={username}
      />
      <div className="review-comments-header">Comments</div>
      <SubmitComment
        addComment={addComment}
        username={username}
        reviewId={reviewId}
      />
      <CommentsList comments={comments} />
    </div>
  );
};

export default Review;
