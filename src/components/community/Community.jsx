import useUsers from "../../hooks/useUsers";
import { useReviews } from "../../hooks/useReviews";
import Loading from "../reusable/Loading";
import PagePicker from "../reusable/PagePicker";
import UserList from "./UserList";
import "../../styles/community/community.css";
import RGInfo from "./RGInfo";
import CommControls from "./CommControls";

const Community = () => {
  const {
    users,
    loading,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
    totalUsers,
    toggleOrder,
    currOrder,
    searchUsers,
  } = useUsers();

  const {
    reviewList,
    loading: reviewLoading,
    reviewAmount,
  } = useReviews("/reviews", {
    limit: 1,
  });

  const websiteInfo = () => {
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

  const userList = () => {
    if (loading) return <Loading class_name="large-loading" height="500px" />;
    if (!users.length)
      return (
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>
          No Matching Users
        </div>
      );

    return (
      <>
        <UserList
          users={users}
          toggleOrder={toggleOrder}
          currOrder={currOrder}
        />
        <PagePicker
          pagesAmount={pagesAmount}
          pagePicker={pagePicker}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      </>
    );
  };

  return (
    <div className="community-container">
      {websiteInfo()}
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Users</h1>
      <CommControls
        toggleOrder={toggleOrder}
        currOrder={currOrder}
        searchUsers={searchUsers}
      />
      {userList()}
    </div>
  );
};

export default Community;
