import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";

const CommentsList = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <div className="center" style={{ marginTop: "20px" }}>
        No comments here yet! Be the first!
      </div>
    );
  }

  console.log(comments);

  return (
    <div className="comments-container">
      {comments.map((comment) => {
        const { body, author, created_at } = comment;

        const { distance } = formatDate(created_at);

        return (
          <div
            key={`${created_at}${distance}`}
            className="comments-container__comment"
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
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;

/*

author: "jessjelly"
body: "Et do ad id dolore id cillum non non culpa. Cillum mollit dolor dolore excepteur aliquip. Quis duis mollit ad enim deserunt."
comment_id: 36
created_at: "2021-03-27T19:48:58.190Z"
review_id: 16
title: "Ticket To Ride"
votes: 3

*/
