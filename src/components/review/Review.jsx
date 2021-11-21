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
import useInteraction from "../../hooks/useInteraction";

const Review = (props) => {
  const {
    user: { username },
  } = useContext(UserContext);

  const { reviewId } = useParams();

  const { item, loading } = useReview("reviews", reviewId, username);

  const { interactionLoading, interaction } = useInteraction(
    reviewId,
    username
  );

  const { comments, commentsLoading, addComment, postUploading } = useComments(
    `/reviews/${reviewId}/comments`
  );

  if (loading || commentsLoading || interactionLoading)
    return <Loading class_name={"large-loading"} />;

  if (!item) {
    return <NotFound />;
  }

  return (
    <div>
      <SingleReview props={props} review={item} interaction={interaction} />
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
