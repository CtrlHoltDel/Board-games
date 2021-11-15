import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import { delItem } from "../../api/actions";

const SingleComment = ({ comment, username }) => {
  console.log(comment);
  const { body, author, created_at, comment_id } = comment;
  const [confirmDel, setConfirmDel] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const { distance } = formatDate(created_at);

  const onDelete = () => {
    delItem(`/comments/${comment_id}`);
  };

  const deleteButton = () => {
    if (username === author) {
      if (confirmDel) {
        return (
          <div
            className="comments-container__comment__delete__confirm"
            onClick={() => {
              setDeleted(true);
            }}
          >
            {deleted ? "Deleted" : "Click to confirm"}
          </div>
        );
      } else {
        return (
          <RiDeleteBinLine
            className="comments-container__comment__delete__icon"
            onClick={() => {
              setConfirmDel(true);
              onDelete();
            }}
          />
        );
      }
    }
  };
  return (
    <div
      key={`${created_at}${distance}`}
      className={
        deleted
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
      <div className="comments-container__comment__delete">
        {deleteButton()}
      </div>
    </div>
  );
};

export default SingleComment;
