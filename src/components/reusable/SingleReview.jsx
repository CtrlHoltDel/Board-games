import { useContext, useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdHowToVote } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { UserContext } from "../../context/user";
import DeleteReviewModal from "./DeleteReviewModal";
import { delItem } from "../../api/actions";

const SingleReview = ({ review, ownProfile, likedPage }) => {
  const {
    title,
    comment_count,
    votes,
    review_id,
    review_img_url,
    created_at,
    owner,
  } = review;

  const {
    user: { username },
  } = useContext(UserContext);

  const [delModal, setDelModal] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const toggleModal = () => {
    setDelModal(!delModal);
  };

  const delHandler = () => {
    setDeleted(true);
    delItem(`/reviews/${review_id}`);
  };

  const { distance } = formatDate(created_at);
  return (
    <div
      key={review_id}
      className="review-list__container"
      style={{ display: deleted && "none" }}
    >
      <Link to={`/reviews/${review_id}`}>
        <div className="review-list__container__imagecont">
          <img
            src={review_img_url}
            alt=""
            className="review-list__container__imagecont__image"
          />
          {!likedPage && (
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
          )}
        </div>
      </Link>
      <div className="review-list__container__info">
        <div className="review-list__container__info__header">
          <div className="review-list__container__info__header__title">
            {title}
          </div>
          <div className="review-list__container__info__header__date">
            {distance}
          </div>
        </div>
        <div className="review-list__container__info__header__links">
          <div>
            <Link to={`/reviews/${review_id}`}>Read more</Link>
          </div>
          <div>
            {!ownProfile && <Link to={`community/${owner}`}>{owner}</Link>}
          </div>
        </div>
        {username === owner && (
          <div
            className="review-list__container__info__delete"
            onClick={toggleModal}
          >
            <RiDeleteBinLine />
          </div>
        )}
        {delModal && (
          <DeleteReviewModal
            toggleModal={toggleModal}
            delHandler={delHandler}
          />
        )}
      </div>
    </div>
  );
};

export default SingleReview;
