import { memo } from "react";
import useCategories from "../../hooks/useCategories.js";

const CategoryPicker = ({ addQuery, currCategory }) => {
  const { categories } = useCategories();

  return (
    <div>
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() => {
              console.log(currCategory);
              addQuery("category", category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default memo(CategoryPicker);
