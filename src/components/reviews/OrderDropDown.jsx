const OrderDropDown = ({ sortReviews }) => {
  return (
    <div className="reviews-main__order">
      <select
        onChange={(e) => {
          const [sort_by, direction] = e.target.value.split(",");
          sortReviews(sort_by, direction);
        }}
      >
        <option value={["created_at", "desc"]}>Most recent first</option>
        <option value={["created_at", "asc"]}>Oldest first</option>
        <option value={["comment_count", "desc"]}>Most Comments</option>
        <option value={["comment_count", "asc"]}>Least Comments</option>
        <option value={["votes", "desc"]}>Highest Rated</option>
        <option value={["votes", "asc"]}>Lowest Rated</option>
      </select>
    </div>
  );
};

export default OrderDropDown;
