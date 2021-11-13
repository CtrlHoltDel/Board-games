import { useState } from "react";
import { useEffect } from "react";
import { getList } from "../api/actions";

export const useReviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState({ p: 1 });

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      const { reviews } = await getList("/reviews", queries);
      setReviewList(() => {
        return [...reviews];
      });
      setLoading(false);
    };

    fetchReviews();
  }, [queries]);

  const addQuery = (key, value) => {
    setQueries(() => {
      if (queries[key] === value) {
        delete queries[key];
        return { ...queries };
      }
      return { ...queries, [key]: value };
    });
  };

  return { reviewList, loading, addQuery };
};
