import { formatDistanceToNow } from "date-fns";

export const formatDate = (sqlDate) => {
  const date = new Date(sqlDate);

  const distance = formatDistanceToNow(date, { addSuffix: true });
  return distance;
};
