import { useState, useEffect } from "react";
import { getList } from "../api/actions";

export const useReviews = (endpoint, initialQueries, p = 1) => {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState({ ...initialQueries, p });
  const [pagesAmount, setPagesAmount] = useState(0);
  const [currPage, setCurrPage] = useState(p);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      const response = await getList(endpoint, queries);
      const { reviews, count } = response;
      setPagesAmount(Math.round(count / 10));
      setReviewList(() => {
        return [...reviews];
      });
      setLoading(false);
    };

    fetchReviews();
  }, [endpoint, queries]);

  const pickCategory = (key, value) => {
    setQueries(() => {
      if (queries[key] === value) return { ...queries, [key]: "" };
      return { ...queries, [key]: value, p: 1 };
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

  const pagePicker = (page) => {
    setQueries((currentQueries) => {
      return { ...currentQueries, p: page };
    });
  };

  return {
    reviewList,
    loading,
    pickCategory,
    sortReviews,
    search,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
  };
};
