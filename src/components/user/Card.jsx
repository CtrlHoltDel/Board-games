import { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import DelModal from "./DelModal";

const Card = ({ user }) => {
  const { user: loggedInUser, setUser } = useContext(UserContext);
  const [delModal, setDelModal] = useState(false);

  const toggleDel = () => {
    setDelModal(!delModal);
  };

  console.log(loggedInUser, setUser);

  const { avatar_url, username, name, comments, likes, reviews } = user;
  return (
    <div className="profile-container__card">
      <div className="profile-container__card__header">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="profile-container__card__header__img"
        />
        <div className="profile-container__card__header__info">
          <div className="profile-container__card__header__info__label">
            Name
          </div>
          <div>{name}</div>
          <div className="profile-container__card__header__info__label">
            Username
          </div>
          <div>{username}</div>
        </div>
      </div>
      <div className="profile-container__card__info-grid">
        <div className="profile-container__card__info-grid__title">
          Comments
        </div>
        <div className="profile-container__card__info-grid__number">
          {comments}
        </div>
        <div className="profile-container__card__info-grid__title">Likes</div>
        <div className="profile-container__card__info-grid__number">
          {likes}
        </div>
        <div className="profile-container__card__info-grid__title">Reviews</div>
        <div className="profile-container__card__info-grid__number">
          {reviews}
        </div>
      </div>
      <div className="profile-container__card__control-buttons">
        <div
          className="profile-container__card__control-buttons__del"
          onClick={toggleDel}
        >
          {delModal ? (
            <AiOutlineClose />
          ) : (
            <RiDeleteBinLine style={{ color: "red" }} />
          )}
        </div>
      </div>
      <DelModal toggle={delModal} setUser={setUser} user={user} />
    </div>
  );
};

export default Card;
