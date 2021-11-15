import { useEffect, useState } from "react";
import { getList } from "../api/actions";

const useComments = (endpoint) => {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      setCommentsLoading(true);
      const { comments } = await getList(endpoint);
      setComments(comments);
      setCommentsLoading(false);
    };

    fetchComments();
  }, [endpoint]);

  return { comments, commentsLoading };
};

export default useComments;
