import { TextField } from "@mui/material";
import { useState } from "react";
import loadingIcon from "../../image/loading.svg";

const SubmitComment = ({ addComment, username, reviewId, postUploading }) => {
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!body.length) {
      setError(true);
      return;
    }

    addComment({
      username,
      body,
      reviewId,
    });

    setBody("");
  };

  return (
    <div className="comment-input">
      <form onSubmit={onSubmit} className="comment-input__form">
        <TextField
          className="comment-input__form__input"
          label="Add your own comment"
          variant="filled"
          multiline={true}
          error={error}
          value={body}
          disabled={postUploading}
          onChange={(e) => {
            setBody(e.target.value);
            setError(false);
          }}
        />
        <button className="comment-input__form__submit">
          {postUploading ? (
            <img src={loadingIcon} alt="" style={{ height: "100%" }} />
          ) : (
            "Submit Comment"
          )}
        </button>
      </form>
    </div>
  );
};

export default SubmitComment;
