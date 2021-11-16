import { useReviews } from "../../hooks/useReviews";
import Loading from "../reusable/Loading";
import PagePicker from "../reusable/PagePicker";
import ReviewList from "../reusable/ReviewList";

const LikedReviews = ({ username }) => {
  const {
    reviewList,
    loading,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
  } = useReviews(`/users/${username}/likes`);

  if (loading) return <Loading class_name="large-loading" />;
  if (!reviewList.length) return <div>No Liked Reviews</div>;

  return (
    <>
      <ReviewList reviewList={reviewList} likedPage={true} />
      <PagePicker
        pagesAmount={pagesAmount}
        pagePicker={pagePicker}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
    </>
  );
};

export default LikedReviews;
