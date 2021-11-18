import { useEffect, useState } from "react";
import { getList } from "../api/actions";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState({ p: 1 });
  const [currOrder, setCurrOrder] = useState("newest");
  const [pagesAmount, setPagesAmount] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const { users, count } = await getList("users", queries);
      setPagesAmount(Math.ceil(count / 10));
      setTotalUsers(count);
      setUsers(users);
      setLoading(false);
    };

    getUsers();
  }, [queries]);

  const pagePicker = (page) => {
    setQueries((currQueries) => {
      return { ...currQueries, p: page };
    });
  };

  const toggleAge = () => {
    setCurrOrder(currOrder === "newest" ? "oldest" : "newest");
    setQueries((currQueries) => {
      return { ...currQueries, order: currOrder === "oldest" ? "desc" : "asc" };
    });
  };

  return {
    totalUsers,
    users,
    loading,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
    toggleAge,
  };
};

export default useUsers;
