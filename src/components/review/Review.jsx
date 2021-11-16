import { useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/user";

import useReview from "../../hooks/useReview";
import Loading from "../reusable/Loading";
import NotFound from "../reusable/NotFound";

import "../../styles/review/review.css";
import SingleReview from "./SingleReview";
import useComments from "../../hooks/useComments";
import CommentsList from "./CommentsList";
import SubmitComment from "./SubmitComment";

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

  const { comments, commentsLoading, addComment, postUploading } = useComments(
    `/reviews/${reviewId}/comments`
  );

  if (!item) {
    return <NotFound />;
  }

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
        postUploading={postUploading}
      />
      <CommentsList comments={comments} username={username} />
    </div>
  );
};

export default Review;
