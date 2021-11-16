import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import { delItem } from "../../api/actions";

const SingleComment = ({
  comment,
  username,
  deletedComments,
  setDeletedComments,
}) => {
  const { body, author, created_at, comment_id } = comment;
  const [confirmDel, setConfirmDel] = useState(false);

  const { distance } = formatDate(created_at);

  const onDelete = () => {
    delItem(`/comments/${comment_id}`);
  };

  const deleteButton = () => {
    if (confirmDel) {
      return (
        <div
          className="comments-container__comment__controls__confirm"
          onClick={() => {
            onDelete();
            setDeletedComments((currComments) => {
              return [...currComments, comment_id];
            });
          }}
        >
          {deletedComments.includes(comment_id)
            ? "Deleted"
            : "Click to confirm"}
        </div>
      );
    } else {
      return (
        <div
          className="comments-container__comment__controls__icon-button"
          onClick={() => {
            setConfirmDel(true);
          }}
        >
          <RiDeleteBinLine
          // className="comments-container__comment__controls__icon"
          />
        </div>
      );
    }
  };

  return (
    <div
      className={
        deletedComments.includes(comment_id)
          ? "comments-container__deleted-comment"
          : "comments-container__comment"
      }
    >
      <div className="comments-container__comment__header">
        <Link to={`/community/${author}`}>
          <div className="comments-container__comment__header__author">
            {author}
          </div>
        </Link>
        <div className="comments-container__comment__header__date">
          {distance}
        </div>
      </div>
      <div className="comments-container__comment__body">{body}</div>
      {username === author && (
        <div className="comments-container__comment__controls">
          {deleteButton()}
        </div>
      )}
    </div>
  );
};

export default SingleComment;
