import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { AiFillHeart } from "react-icons/ai";
import { patchLikeToggle } from "../../api/actions";
import { useState } from "react";

const SingleReview = ({ review, props, liked, toggleLike, username }) => {
  const {
    review_img_url,
    title,
    created_at,
    category,
    owner,
    review_body,
    likes,
    review_id,
  } = review;

  const [updateLikeCount, setUpdateLikeCount] = useState(0);
  const [initialLike, setInitialLike] = useState(liked);

  const toggleOptimistic = (amount) => {
    setUpdateLikeCount(updateLikeCount + amount);
  };

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
        <span className="clickable-link" onClick={() => props.history.goBack()}>
          Reviews
        </span>
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
          <div className="review-page__contents__title__like">
            <button
              onClick={() => {
                toggleLike();
                patchLikeToggle(review_id, username);
                toggleOptimistic(initialLike ? -1 : 1);
                setInitialLike(!initialLike);
              }}
            >
              {liked ? (
                <AiFillHeart style={{ color: "red", fontSize: "20px" }} />
              ) : (
                <AiFillHeart style={{ color: "gray", fontSize: "20px" }} />
              )}
              {likes + updateLikeCount}
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
