import "../../styles/community/profile.css";

import { useParams } from "react-router";
import useUser from "../../hooks/useUser";
import Loading from "../reusable/Loading";
import Card from "./Card";
import { useState } from "react";
import UserComments from "./UserComments";
import LikedReviews from "./LikedReviews";
import UserReviews from "./UserReviews";
import NotFound from "../reusable/NotFound";

const Profile = () => {
  const { username } = useParams();

  const [currentTab, setCurrentTab] = useState("reviews");

  const { user, loading } = useUser(username);

  if (loading) return <Loading class_name="large-loading" />;
  if (!user) return <NotFound />;

  const tabs = () => {
    if (currentTab === "reviews") return <UserReviews username={username} />;

    if (currentTab === "comments") return <UserComments username={username} />;

    if (currentTab === "liked reviews")
      return <LikedReviews username={username} />;
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
