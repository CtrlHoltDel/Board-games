import { useState } from "react";
import { addItem } from "../../api/actions";
import useCategories from "../../hooks/useCategories";
import "../../styles/addreview/addreview.css";
import Loading from "../reusable/Loading";
import ReviewForm from "./ReviewForm";

const AddReview = ({ user: { username } }) => {
  const { categories, loading } = useCategories();
  const [uploading, setUploading] = useState(false);

  const onSubmit = async (
    title,
    review_body,
    category,
    designer = "unknown",
    review_img_url
  ) => {
    setUploading(true);
    await addItem("/reviews", {
      title,
      review_body,
      designer,
      review_img_url,
      category,
      owner: username,
    });
    setUploading(false);
  };

  if (loading) return <Loading class_name={"large-loading"} />;
  if (uploading)
    return (
      <div className={"add-review-uploading"}>
        <Loading class_name={"uploading"} />
        <div>Uploading...</div>
      </div>
    );

  return (
    <div className="add-review">
      <ReviewForm onSubmit={onSubmit} categories={categories} />
    </div>
  );
};

export default AddReview;
