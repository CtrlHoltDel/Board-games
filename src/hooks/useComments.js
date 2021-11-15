import { useEffect, useState } from "react";
import { addItem, getList } from "../api/actions";

const useComments = (endpoint) => {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [postUploading, setPostUploading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setCommentsLoading(true);
      const { comments } = await getList(endpoint);
      setComments(comments);
      setCommentsLoading(false);
    };

    fetchComments();
  }, [endpoint]);

  const addComment = async ({ username, body, reviewId }) => {
    setPostUploading(true);
    const { comment } = await addItem(`/reviews/${reviewId}/comments`, {
      username,
      body,
      reviewId,
    });

    setComments((currComments) => {
      return [comment, ...currComments];
    });

    setPostUploading(false);
  };

  return { comments, commentsLoading, addComment, postUploading };
};

export default useComments;
