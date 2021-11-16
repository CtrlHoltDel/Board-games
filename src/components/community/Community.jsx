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

  if (loading || reviewLoading) return <Loading class_name="large-loading" />;

  return (
    <div className="community-container">
      <RGInfo
        totalUsers={totalUsers}
        latestReview={reviewList}
        reviewAmount={reviewAmount}
      />
      <UserList users={users} />
      <PagePicker
        pagesAmount={pagesAmount}
        pagePicker={pagePicker}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
    </div>
  );
};

export default Community;

// pagesAmount, pagePicker, currPage, setCurrPage
