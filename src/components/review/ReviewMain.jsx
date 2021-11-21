import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { AiFillHeart } from "react-icons/ai";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

const ReviewMain = ({ review, props, username, interaction }) => {
  const {
    review_img_url,
    title,
    created_at,
    category,
    owner,
    review_body,
    likes,
    votes,
  } = review;

  const {
    currLiked,
    toggleLike,
    optimisticLike,
    amendVote,
    currVote,
    optimisticVote,
  } = interaction;

  const { distance, formattedDate } = formatDate(created_at);

  const voteColor = () => {
    return currVote === -1 ? "red" : currVote === 1 ? "green" : "black";
  };

  return (
    <div className="review-page">
      <div className="review-page__header">
        <button
          className="review-page__header__goBack"
          onClick={() => props.history.goBack()}
        >
          <IoMdArrowRoundBack />
          <div className="review-page__header__goBack__text">Back</div>
        </button>
        <img
          src={review_img_url}
          alt=""
          className="review-page__header__image"
        />
      </div>
      <div className="review-page__path-info">
        <Link style={{ color: "white" }} to="/reviews">
          Reviews
        </Link>
        {">"} {category} {">"} {title}
      </div>
      <div className="review-page__contents">
        <div className="review-page__contents__title">
          <div className="review-page__contents__title__title">{title}</div>
          <div className="review-page__contents__title__date">
            {formattedDate} - {distance}
          </div>
          <Link to={`/community/${owner}`}>
            <div className="review-page__contents__title__owner">{owner}</div>
          </Link>
          <div className="review-page__contents__title__interaction_container">
            <div className="review-page__contents__title__interaction_container__votes interaction-cont">
              <FaArrowAltCircleUp
                style={{ color: currVote === 1 && "green" }}
                onClick={() => {
                  amendVote(1);
                }}
                className="review-page__contents__title__interaction_container__votes__icon"
              />
              <div style={{ color: voteColor() }}>{votes + optimisticVote}</div>
              <FaArrowAltCircleDown
                style={{ color: currVote === -1 && "red" }}
                onClick={() => {
                  amendVote(-1);
                }}
                className="review-page__contents__title__interaction_container__votes__icon"
              />
            </div>
            <button
              onClick={() => {
                toggleLike();
              }}
              className="review-page__contents__title__interaction_container__like interaction-cont"
            >
              <AiFillHeart
                style={{ color: currLiked ? "red" : "gray", fontSize: "20px" }}
              />
              {likes + optimisticLike}
            </button>
          </div>
        </div>
        <div className="review-page__contents__body">{review_body}</div>
      </div>
    </div>
  );
};

export default ReviewMain;
