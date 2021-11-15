import { TextField } from "@mui/material";
import { useState } from "react";
import { addItem } from "../../api/actions";

const SubmitComment = ({ addComment, username, reviewId }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!comment.length) {
      setError(true);
      return;
    }

    addComment({
      author: username,
      created_at: Date.now(),
      body: comment,
    });

    addItem(`/reviews/${reviewId}/comments`, { username, body: comment });

    setComment("");
  };

  return (
    <div className="comment-input">
      <form onSubmit={onSubmit} className="comment-input__form">
        <TextField
          className="comment-input__form__input"
          label="Add a comment"
          variant="filled"
          multiline={true}
          error={error}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setError(false);
          }}
        />
        <button className="comment-input__form__submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default SubmitComment;
