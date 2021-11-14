import useCategories from "../../hooks/useCategories.js";
import Loading from "../reusable/Loading.jsx";

const CategoryPicker = ({ pickCategory }) => {
  const { categories, loading, currCategory, setCurrCategory } =
    useCategories();

  if (loading) return <Loading class_name={"cat-bar"} />;

  const fullScreen = () => {
    return (
      <div className="reviews-main__categories">
        {categories.map((category, index) => {
          const categoryOnClick = () => {
            if (currCategory === category) {
              setCurrCategory(null);
            } else {
              setCurrCategory(category);
            }
            pickCategory("category", category);
          };

          const endButtonsClass = () => {
            if (!index) return "reviews-main__categories__first";
            if (index === categories.length - 1)
              return "reviews-main__categories__last";
          };

          return (
            <button
              key={category}
              style={{
                backgroundColor: "#313131",
                color: currCategory === category ? "#ffae18" : "white",
              }}
              className={endButtonsClass()}
              onClick={categoryOnClick}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  };

  const mobile = () => {
    return (
      <div className="reviews-main__categories-mobile">
        <select
          onChange={(e) => {
            pickCategory("category", e.target.value);
          }}
        >
          <option value="">All Categories</option>;
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  return (
    <>
      {mobile()}
      {fullScreen()}
    </>
  );
};

export default CategoryPicker;
