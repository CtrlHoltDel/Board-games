import { useEffect, useState } from "react";
import { getInteraction, patchLikeToggle, patchVote } from "../api/actions";

const useInteraction = (reviewId, username) => {
  const [interactionLoading, setInteractionLoading] = useState(true);
  const [initialLike, setInitialLike] = useState(false);
  const [currLiked, setCurrLiked] = useState(false);
  const [currVote, setCurrVote] = useState(0);
  const [optimisticLike, setOptimisticLike] = useState(0);
  const [optimisticVote, setOptimisticVote] = useState(0);

  useEffect(() => {
    const getInitialInteraction = async () => {
      setInteractionLoading(true);
      const { liked, voted } = await getInteraction(reviewId, username);
      setInitialLike(liked);
      setCurrLiked(liked);
      setCurrVote(voted);

      setInteractionLoading(false);
    };

    getInitialInteraction();
  }, [reviewId, username]);

  const toggleLike = async () => {
    setCurrLiked(!currLiked);
    patchLikeToggle(reviewId, username);

    initialLike
      ? setOptimisticLike(optimisticLike === 0 ? -1 : 0)
      : setOptimisticLike(optimisticLike === 0 ? 1 : 0);
  };

  const amendVote = (vote) => {
    if (vote === -1 && currVote === -1) vote = 1;
    if (vote === 1 && currVote === 1) vote = -1;

    setOptimisticVote((optVote) => optVote + vote);
    patchVote(reviewId, { inc_votes: vote, username });
    setCurrVote((currVote) => currVote + vote);
  };

  return {
    interactionLoading,
    interaction: {
      currLiked,
      toggleLike,
      optimisticLike,
      amendVote,
      currVote,
      optimisticVote,
    },
  };
};

export default useInteraction;
