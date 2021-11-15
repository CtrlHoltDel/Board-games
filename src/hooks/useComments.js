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

  const addComment = (newComment) => {
    setComments(() => {
      return [newComment, ...comments];
    });
  };

  return { comments, commentsLoading, addComment };
};

export default useComments;
