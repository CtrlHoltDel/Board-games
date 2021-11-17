import { useEffect, useState } from "react";
import { addItem, getList } from "../api/actions";

const useComments = (endpoint, p = 1) => {
  console.log(endpoint);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [postUploading, setPostUploading] = useState(false);
  const [queries, setQueries] = useState({ p });
  const [pagesAmount, setPagesAmount] = useState(0);
  const [currPage, setCurrPage] = useState(p);

  useEffect(() => {
    const fetchComments = async () => {
      setCommentsLoading(true);
      const res = await getList(endpoint, queries);

      if (res) {
        const { comments, count = 0 } = res;
        setComments(comments);
        setPagesAmount(Math.ceil(count / 10));
      }
      setCommentsLoading(false);
    };
    fetchComments();
  }, [endpoint, queries]);

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

  const pagePicker = (page) => {
    setQueries((currQueries) => {
      return { ...currQueries, p: page };
    });
  };

  return {
    comments,
    commentsLoading,
    addComment,
    postUploading,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
  };
};

export default useComments;
