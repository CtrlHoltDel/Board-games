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
      console.log(queries);
      const { reviews } = await getList("/reviews", queries);
      setReviewList(() => {
        return [...reviews];
      });
      setLoading(false);
    };

    fetchReviews();
  }, [queries]);

  const pickCategory = (key, value) => {
    setQueries(() => {
      if (queries[key] === value) return { ...queries, [key]: "" };
      return { ...queries, [key]: value };
    });
  };

  const sortReviews = (type, direction) => {
    setQueries((currentQueries) => {
      return { ...currentQueries, sort_by: type, order: direction };
    });
  };

  const search = (searchTerm) => {
    setQueries((currentQueries) => {
      return { ...currentQueries, search: searchTerm };
    });
  };

  return { reviewList, loading, pickCategory, sortReviews, search };
};
