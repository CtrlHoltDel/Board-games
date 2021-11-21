import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { AiFillHeart } from "react-icons/ai";

const SingleReview = ({ review, props, username, interaction }) => {
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
        <div>
          <button
            style={{ backgroundColor: currVote === 1 && "green" }}
            onClick={() => {
              amendVote(1);
            }}
          >
            Upvote
          </button>
          <div>{currVote}</div>
          <button
            style={{ backgroundColor: currVote === -1 && "red" }}
            onClick={() => {
              amendVote(-1);
            }}
          >
            Downvote
          </button>
        </div>
        <div className="review-page__contents__title">
          <div className="review-page__contents__title__title">{title}</div>
          <div className="review-page__contents__title__date">
            {formattedDate} - {distance}
          </div>
          <Link to={`/community/${owner}`}>
            <div className="review-page__contents__title__owner">{owner}</div>
          </Link>
          <div className="review-page__contents__title__interaction_container">
            <div>{votes + optimisticVote}</div>
            <button
              onClick={() => {
                toggleLike();
              }}
              className="review-page__contents__title__interaction_container__like"
            >
              {currLiked ? (
                <AiFillHeart style={{ color: "red", fontSize: "20px" }} />
              ) : (
                <AiFillHeart style={{ color: "gray", fontSize: "20px" }} />
              )}
              {likes + optimisticLike}
            </button>
          </div>
        </div>
        <div className="review-page__contents__body">{review_body}</div>
      </div>
    </div>
  );
};

export default SingleReview;

/*

category: "strategy"
comment_count: 0
created_at: "2021-10-31T16:30:56.673Z"
designer: "TD"
likes: 0
owner: "GuestUser"
review_body: "I am the best overwatch player"
review_id: 28
review_img_url: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
title: "Gaara"
votes: 0

*/
