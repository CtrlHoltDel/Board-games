import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";

const RGInfo = ({ totalUsers, latestReview, reviewAmount }) => {
  const { title, review_id, owner, created_at } = latestReview[0];

  const { distance } = formatDate(created_at);

  return (
    <div className="rg-info-card">
      {console.log(latestReview[0])}
      <div className="rg-info-card__header">Roared Games Info</div>
      <div className="rg-info-card__info">
        <div className="rg-info-card__info__users">
          Total Users: {totalUsers}
        </div>
        <div className="rg-info-card__info__reviews">
          Total Reviews: {reviewAmount}
        </div>
      </div>
      <div className="rg-info-card__latest">
        <div className="rg-info-card__latest__header"> Latest Review;</div>
        <Link to={`/reviews/${review_id}`}>
          <div className="rg-info-card__latest__title">{title}</div>
        </Link>
        <div className="rg-info-card__latest__info">
          <div>
            By <Link to={`/community/${owner}`}>{owner}</Link> {distance}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RGInfo;
