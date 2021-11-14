import { AiOutlineComment } from "react-icons/ai";
import { MdHowToVote } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";

const ReviewList = ({ reviewList }) => {
  return (
    <div className="review-list">
      {reviewList.map(
        ({
          title,
          comment_count,
          votes,
          review_id,
          review_img_url,
          created_at,
          owner,
        }) => {
          return (
            <div key={review_id} className="review-list__container">
              <Link to={`reviews/${review_id}`}>
                <div className="review-list__container__imagecont">
                  <img
                    src={review_img_url}
                    alt=""
                    className="review-list__container__imagecont__image"
                  />
                  <div className="review-list__container__imagecont__interaction">
                    <div className="review-list__container__imagecont__interaction__cont">
                      <MdHowToVote className="review-list__container__imagecont__interaction__cont__icon" />
                      {votes}
                    </div>
                    <div className="review-list__container__imagecont__interaction__cont">
                      <AiOutlineComment className="review-list__container__imagecont__interaction__cont__icon" />
                      {comment_count}
                    </div>
                  </div>
                </div>
              </Link>
              <div className="review-list__container__info">
                <div className="review-list__container__info__header">
                  <div className="review-list__container__info__header__title">
                    {title}
                  </div>
                  <div className="review-list__container__info__header__date">
                    {formatDate(created_at)}
                  </div>
                </div>
                <div className="review-list__container__info__header__links">
                  <div>
                    <Link
                      style={{ color: "#5252ff" }}
                      to={`reviews/${review_id}`}
                    >
                      Read more
                    </Link>
                  </div>
                  <div>
                    <Link
                      style={{ color: "#5252ff" }}
                      to={`community/${owner}`}
                    >
                      {owner}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ReviewList;
