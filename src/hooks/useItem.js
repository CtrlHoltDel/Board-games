import { useEffect } from "react";
import { useState } from "react";
import { getItem } from "../api/actions";

const useItem = (endpoint, value) => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReview = async () => {
      setLoading(true);
      const { review } = await getItem(endpoint, value);
      setItem(review);

      setLoading(false);
    };

    getReview();
  }, [value]);

  return { item, loading };
};

export default useItem;
