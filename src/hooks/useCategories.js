import { useState } from "react";
import { useEffect } from "react";
import { getList } from "../api/actions";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currCategory, setCurrCategory] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const { categories } = await getList("categories");
      setCategories(categories.map((category) => category.slug));
      setLoading(false);
    };

    getCategories();
  }, []);

  return { categories, loading, currCategory, setCurrCategory };
};

export default useCategories;
