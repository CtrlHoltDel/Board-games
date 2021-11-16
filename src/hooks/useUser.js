import { useEffect, useState } from "react";
import { getItem } from "../api/actions";

const useUser = (username) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const res = await getItem("users", username);
      setUser(res ? res.user : res);
      setLoading(false);
    };
    getUser();
  }, [username]);

  return { user, loading };
};

export default useUser;
