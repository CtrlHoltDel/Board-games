import "../../styles/community/profile.css";

import { useParams } from "react-router";
import useUser from "../../hooks/useUser";
import { useReviews } from "../../hooks/useReviews.js";
import Loading from "../reusable/Loading";
import Card from "./Card";
import ReviewList from "../reviews/ReviewList";
import { useState } from "react";
import UserComments from "./UserComments";
import LikedReviews from "./LikedReviews";

const Profile = () => {
  const { username: paramUsername } = useParams();

  const [currentTab, setCurrentTab] = useState("reviews");

  const { user, loading } = useUser(paramUsername);

  const { reviewList, loading: reviewsLoading } = useReviews({
    username: paramUsername,
  });

  if (loading) return <Loading class_name="large-loading" />;
  if (!user) return <div>404 no user</div>;

  const tabs = () => {
    if (currentTab === "reviews") {
      return (
        <>
          <h2>Reviews by {user.username}</h2>
          {reviewsLoading ? (
            <Loading class_name="large-loading" />
          ) : (
            <ReviewList reviewList={reviewList} ownProfile={true} />
          )}
        </>
      );
    }

    if (currentTab === "comments") {
      return <UserComments username={paramUsername} />;
    }

    if (currentTab === "liked reviews") {
      return <LikedReviews username={paramUsername} />;
    }
  };

  const buttons = () => {
    const buttonNames = ["reviews", "liked reviews", "comments"];
    return (
      <div className="profile-container__buttons">
        {buttonNames.map((button) => {
          return (
            <button
              style={{ color: currentTab === button ? "orange" : "white" }}
              className={
                (button === "reviews" && "left-button") ||
                (button === "comments" && "right-button")
              }
              onClick={() => {
                setCurrentTab(button);
              }}
            >
              {button}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="profile-container">
      <Card user={user} />
      {buttons()}
      {tabs()}
    </div>
  );
};

export default Profile;

/*

avatar_url: "https://i.imgur.com/5jd7Q7T.png"
comments: 0
email: "guest@boredgames.com"
likes: 1
name: "Guest"
reviews: 1
username: "GuestUser"

*/
