import { useEffect, useState } from "react";
import { getList } from "../api/actions";

const useReviewsProfile = (endpoint) => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLikes = async () => {
      setLoading(true);
      const { reviews } = await getList(endpoint);
      setReviews(reviews);
      setLoading(false);
    };

    getLikes();
  }, []);

  return { reviews, loading };
};

export default useReviewsProfile;
