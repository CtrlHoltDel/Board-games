import useUsers from "../../hooks/useUsers";
import { useReviews } from "../../hooks/useReviews";
import Loading from "../reusable/Loading";
import PagePicker from "../reusable/PagePicker";
import UserList from "./UserList";
import "../../styles/community/community.css";
import RGInfo from "./RGInfo";

const Community = () => {
  const {
    users,
    loading,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
    totalUsers,
  } = useUsers();

  const {
    reviewList,
    loading: reviewLoading,
    reviewAmount,
  } = useReviews("/reviews", {
    limit: 1,
  });

  const rgInfo = () => {
    return reviewLoading ? (
      <Loading class_name="large-loading" height="200px" />
    ) : (
      <RGInfo
        totalUsers={totalUsers}
        latestReview={reviewList}
        reviewAmount={reviewAmount}
      />
    );
  };

  return (
    <div className="community-container">
      {rgInfo()}
      {loading ? (
        <Loading class_name="large-loading" height="500px" />
      ) : (
        <>
          <UserList users={users} />
          <PagePicker
            pagesAmount={pagesAmount}
            pagePicker={pagePicker}
            currPage={currPage}
            setCurrPage={setCurrPage}
          />
        </>
      )}
    </div>
  );
};

export default Community;

// pagesAmount, pagePicker, currPage, setCurrPage
