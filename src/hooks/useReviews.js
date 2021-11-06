import { useState } from "react";
import { useEffect } from "react";
import { getList } from "../api/actions";

export const useReviews = (p = 0) => {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      const { reviews } = await getList("/reviews");
      setReviewList((currentReviews) => {
        return [...currentReviews, ...reviews];
      });
      setLoading(false);
    };

    fetchReviews();
    console.log(reviewList.length);
  }, [p]);

  const loadMore = () => {};

  return { reviewList, loading, loadMore };
};
