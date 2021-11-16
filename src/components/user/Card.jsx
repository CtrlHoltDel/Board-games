const Card = ({ user }) => {
  const { avatar_url, username, name, email, comments, likes, reviews } = user;
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
          <div className="profile-container__card__header__info__label">
            Email
          </div>
          <div
            onMouseOver={() => {
              // console.log(email);
            }}
          >
            {email.slice(0, 20)}...
          </div>
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
    </div>
  );
};

export default Card;
