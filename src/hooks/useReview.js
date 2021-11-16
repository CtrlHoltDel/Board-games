import { useEffect } from "react";
import { useState } from "react";
import { checkLike, getItem } from "../api/actions";

const useReview = (endpoint, value, user) => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      setLoading(true);
      const res = await getItem(endpoint, value);

      if (!res) {
        console.log("test");
        setItem(null);
        return;
      }

      const bool = await checkLike(res.review.review_id, user);
      setLiked(bool);
      setItem(res.review);
      setLoading(false);
    };

    getReview();
  }, [endpoint, value, user]);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return { item, loading, liked, toggleLike };
};

export default useReview;
