import { AiOutlineComment } from 'react-icons/ai';
import { MdHowToVote } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviewList }) => {
  return (
    <div className="review-list">
      {reviewList.map(
        ({ title, comment_count, votes, review_id, review_img_url }) => {
          return (
            <Link
              key={review_id}
              className="review-list__container"
              to={`reviews/${review_id}`}
            >
              <div className="review-list__container__imagecont">
                <img
                  src={review_img_url}
                  alt=""
                  className="review-list__container__imagecont__image"
                />
                <div className="review-list__container__imagecont__title">
                  {title}
                </div>
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
          );
        }
      )}
    </div>
  );
};

export default ReviewList;
