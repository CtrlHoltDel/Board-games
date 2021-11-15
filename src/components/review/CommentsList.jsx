import { useState } from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments, username }) => {
  const [deletedComments, setDeletedComments] = useState([]);

  if (!comments.length) {
    return (
      <div className="center" style={{ marginTop: "20px" }}>
        No comments here yet! Be the first!
      </div>
    );
  }

  return (
    <div className="comments-container">
      {comments.map((comment) => {
        return (
          <SingleComment
            comment={comment}
            username={username}
            deletedComments={deletedComments}
            setDeletedComments={setDeletedComments}
          />
        );
      })}
    </div>
  );
};

export default CommentsList;
