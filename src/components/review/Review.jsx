import { useParams } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

import "../../styles/review/review.css";
import Loading from "../reusable/Loading";
import useItem from "../../hooks/useItem";

const Review = (props) => {
  const { reviewId } = useParams();

  const { item, loading } = useItem("reviews", reviewId);

  if (loading) return <Loading class_name={"large-loading"} />;

  const { review_img_url } = item;

  return (
    <div className="review-page">
      <div className="review-page__header">
        <button
          className="review-page__header__goBack"
          onClick={() => props.history.goBack()}
        >
          <IoMdArrowRoundBack />
        </button>
        <img
          src={review_img_url}
          alt=""
          className="review-page__header__image"
        />
      </div>
    </div>
  );
};

export default Review;

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
