import { useState } from "react";
import { useReviews } from "../../hooks/useReviews";
import Loading from "../reusable/Loading";
import PagePicker from "../reusable/PagePicker";
import ReviewList from "../reusable/ReviewList";

const UserReviews = ({ username }) => {
  const [currDirection, setCurrDirection] = useState(true);

  const {
    reviewList,
    loading,
    sortReviews,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
  } = useReviews("/reviews", {
    username,
  });

  if (loading) return <Loading class_name="large-loading" />;
  if (!reviewList.length) return <div>No reviews by this user</div>;

  return (
    <>
      <button
        className="oldnew-toggle"
        onClick={() => {
          setCurrDirection(!currDirection);
          sortReviews("created_at", currDirection ? "asc" : "desc");
        }}
      >
        {console.log(currDirection)}
        {currDirection ? "See Oldest First" : "See Newest First"}
      </button>
      <ReviewList reviewList={reviewList} ownProfile={true} />
      <PagePicker
        pagesAmount={pagesAmount}
        pagePicker={pagePicker}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
    </>
  );
};

export default UserReviews;
