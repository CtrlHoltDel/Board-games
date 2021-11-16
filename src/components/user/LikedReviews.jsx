import useReviewsProfile from "../../hooks/useUserReviews";
import Loading from "../reusable/Loading";
import ReviewList from "../reviews/ReviewList";

const LikedReviews = ({ username }) => {
  const { reviews, loading } = useReviewsProfile(`/users/${username}/likes`);

  if (loading) return <Loading class_name="large-loading" />;

  console.log(reviews);

  return (
    <>
      <h2>Reviews liked by {username}</h2>

      <ReviewList reviewList={reviews} likedPage={true} />
    </>
  );
};

export default LikedReviews;

/*

category: "strategy"
​created_at: "1970-01-10T02:56:38.400Z"
​designer: "Emerson Matsuuchi"
​liked_at: "2021-11-16T14:47:10.574Z"
​owner: "tickle122"
​review_body: "This game reminds me of the stress-free environment described in a song sung by a crab in the famous film about a mermaid. Plenty of coral collecting, and reef building to keep you entertained "
​review_id: 18
​review_img_url: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
​rl_p_key: 20
​title: "Reef"
​username: "GuestUser"
​votes: 6

*/
