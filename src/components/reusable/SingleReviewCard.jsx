import { useContext, useState } from "react";
import useInteraction from "../../hooks/useInteraction";

import { AiOutlineComment } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

import { UserContext } from "../../context/user";
import { Link } from "react-router-dom";

import { formatDate } from "../../utils/utils";

import { delItem } from "../../api/actions";
import Loading from "../reusable/Loading";
import DeleteReviewModal from "./DeleteReviewModal";

const SingleReviewCard = ({ review, ownProfile, likedPage }) => {
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
  const { interactionLoading, interaction } = useInteraction(
    review_id,
    username
  );

  const toggleModal = () => {
    setDelModal(!delModal);
  };

  const delHandler = () => {
    setDeleted(true);
    delItem(`/reviews/${review_id}`);
  };

  const { distance } = formatDate(created_at);

  if (interactionLoading)
    return <Loading class_name="loading-card" height="200px" />;

  const { currLiked, toggleLike, amendVote, currVote, optimisticVote } =
    interaction;

  const voteColor = () => {
    return currVote === -1 ? "red" : currVote === 1 ? "green" : "black";
  };

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
                <AiOutlineComment className="review-list__container__imagecont__interaction__cont__icon" />
                {comment_count}
              </div>
            </div>
          )}
        </div>
      </Link>
      <div className="review-list__container__main">
        <div className="review-list__container__main__interaction">
          <div className="review-list__container__main__interaction__votes">
            <button
              className="review-list__container__main__interaction__votes__up"
              style={{ color: currVote === 1 && "green" }}
              onClick={() => {
                amendVote(1);
              }}
            >
              <FaArrowAltCircleUp />
            </button>
            <div
              className="review-list__container__main__interaction__votes__number"
              style={{ color: voteColor() }}
            >
              {votes + optimisticVote}
            </div>
            <button
              className="review-list__container__main__interaction__votes__down"
              style={{ color: currVote === -1 && "red" }}
              onClick={() => {
                amendVote(-1);
              }}
            >
              <FaArrowAltCircleDown />
            </button>
          </div>
        </div>
        <div className="review-list__container__main__info">
          <div className="review-list__container__main__info__main-int">
            {username === owner && (
              <div
                className="review-list__container__main__info__main-int__delete main-int-items"
                onClick={toggleModal}
              >
                <RiDeleteBinLine />
              </div>
            )}
            <div
              className="review-list__container__main__info__main-int__liked main-int-items"
              onClick={toggleLike}
            >
              <AiFillHeart style={{ color: currLiked ? "red" : "gray" }} />
            </div>
          </div>
          <div className="review-list__container__main__info__header">
            <div className="review-list__container__main__info__header__title">
              {title}
            </div>
            <div className="review-list__container__main__info__header__date">
              {distance}
            </div>
          </div>
          <div className="review-list__container__main__info__header__links">
            <div>
              <Link to={`/reviews/${review_id}`}>Read more</Link>
            </div>
            <div>
              {!ownProfile && <Link to={`community/${owner}`}>{owner}</Link>}
            </div>
          </div>
        </div>
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

export default SingleReviewCard;
