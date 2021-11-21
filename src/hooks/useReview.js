import { useEffect } from "react";
import { useState } from "react";
import { getItem } from "../api/actions";

const useReview = (endpoint, value, user) => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReview = async () => {
      setLoading(true);
      const res = await getItem(endpoint, value);
      if (!res) {
        setItem(res);
        setLoading(false);
      } else {
        const { review } = res;
        setItem(review);
        setLoading(false);
      }
    };

    getReview();
  }, [endpoint, value, user]);

  return { item, loading };
};

export default useReview;
