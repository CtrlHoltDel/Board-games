import { Link } from 'react-router-dom';

const NavBar = () => {
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
    </nav>
  );
};

export default NavBar;
