import { useContext } from "react";
import { UserContext } from "../../context/user";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { setUser } = useContext(UserContext);

  const logout = () => {
    setUser(null);
  };
  return (
    <nav>
      <Link to="/reviews">
        <button>Reviews</button>
      </Link>
      <Link to="/community">
        <button>Community</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/add_review">
        <button>Add Review</button>
      </Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default NavBar;
