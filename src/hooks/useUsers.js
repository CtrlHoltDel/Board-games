import { useEffect, useState } from "react";
import { getList } from "../api/actions";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState({ p: 1 });
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
    setQueries({ p: page });
  };

  return {
    totalUsers,
    users,
    loading,
    pagesAmount,
    pagePicker,
    currPage,
    setCurrPage,
  };
};

export default useUsers;
