import { Link } from "react-router-dom";
import useComments from "../../hooks/useComments";
import { formatDate } from "../../utils/utils";
import Loading from "../reusable/Loading";
import PagePicker from "../reviews/PagePicker";

const UserComments = ({ username }) => {
  const {
    comments,
    commentsLoading,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
  } = useComments(`/users/${username}/comments`);

  console.log(pagesAmount);

  if (commentsLoading) return <Loading class_name="large-loading" />;

  return (
    <>
      {comments.map((comment) => {
        const { title, review_id, created_at, body } = comment;

        const { distance } = formatDate(created_at);

        return (
          <div className="profile-container__comment">
            <Link
              style={{ textDecoration: "none" }}
              to={`/reviews/${review_id}`}
            >
              <div className="profile-container__comment__title">{title}</div>
            </Link>
            <div className="profile-container__comment__info">
              <div className="profile-container__comment__info__date">
                {distance}
              </div>
              <div className="profile-container__comment__info__body">
                {body}
              </div>
            </div>
          </div>
        );
      })}
      <PagePicker
        pagesAmount={pagesAmount}
        pagePicker={pagePicker}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
    </>
  );
};

export default UserComments;
