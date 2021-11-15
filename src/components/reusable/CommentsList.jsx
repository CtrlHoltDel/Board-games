import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";

const CommentsList = ({ comments }) => {
  return (
    <div className="comments-container">
      {comments.map((comment) => {
        const { body, author, created_at } = comment;

        const { distance } = formatDate(created_at);

        return (
          <div className="comments-container__comment">
            <div className="comments-container__comment__header">
              <Link>
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
