import { useEffect, useState } from "react";
import { getList } from "../api/actions";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState({ p: 1 });
  const [currOrder, setCurrOrder] = useState(false);
  const [pagesAmount, setPagesAmount] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const { users, count } = await getList("users", queries);
      const { count: totalCount } = await getList("users");
      setPagesAmount(Math.ceil(count / 10));
      setTotalUsers(totalCount);
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

  const toggleOrder = () => {
    setCurrOrder(!currOrder);
    setQueries((currQueries) => {
      return { ...currQueries, order: currOrder ? "desc" : "asc" };
    });
  };

  const searchUsers = (term) => {
    setQueries((currQueries) => {
      return { ...currQueries, search: term };
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
    toggleOrder,
    currOrder,
    searchUsers,
  };
};

export default useUsers;
