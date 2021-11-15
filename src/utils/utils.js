import { format, formatDistanceToNow } from "date-fns";

export const formatDate = (sqlDate) => {
  const date = new Date(sqlDate);

  const distance = formatDistanceToNow(date, { addSuffix: true });
  const formattedDate = format(date, "dd/MM/yyyy");
  return { distance, formattedDate };
};
