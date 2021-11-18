import { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

import DelModal from "./DelModal";
import EditModal from "./EditModal";
import { formatDate } from "../../utils/utils";

const Card = ({ user }) => {
  const { avatar_url, username, name, comments, likes, reviews, created } =
    user;
  const { user: loggedInUser, setUser } = useContext(UserContext);
  const [delModal, setDelModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentName, setCurrentName] = useState(name);
  const [currentImage, setCurrentImage] = useState(avatar_url);

  const toggleDel = () => {
    setDelModal(!delModal);
  };

  const toggleEdit = () => {
    setEditModal(!editModal);
  };

  const { distance } = formatDate(created);

  return (
    <div className="profile-container__card">
      <div className="profile-container__card__header">
        <img
          src={currentImage}
          alt="User Avatar"
          className="profile-container__card__header__img"
        />
        <div className="profile-container__card__header__info">
          <div className="profile-container__card__header__info__label">
            Name
          </div>
          <div>{currentName}</div>
          <div className="profile-container__card__header__info__label">
            Username
          </div>
          <div>{username}</div>
          <div className="profile-container__card__header__info__label">
            Account created
          </div>
          <div>{distance}</div>
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
      {loggedInUser.username === user.username && (
        <div className="profile-container__card__control-buttons">
          <div
            className="profile-container__card__control-buttons__del"
            onClick={toggleDel}
          >
            <RiDeleteBinLine style={{ color: "red" }} />
          </div>
          <div
            className="profile-container__card__control-buttons__del"
            onClick={toggleEdit}
            style={{ marginTop: "5px" }}
          >
            <BiEdit style={{ color: "black" }} />
          </div>
        </div>
      )}
      <DelModal
        boolToggle={delModal}
        toggleDel={toggleDel}
        setUser={setUser}
        user={user}
      />
      <EditModal
        toggleEdit={toggleEdit}
        boolToggle={editModal}
        user={user}
        setCurrentName={setCurrentName}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
};

export default Card;
