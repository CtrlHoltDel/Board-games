import { Squash as Hamburger } from 'hamburger-react';
import logo from '../../image/logowhite.png';
import '../../styles/header/header.css';

const Header = () => {
  return (
    <header>
      <div className="colour-accent"></div>
      <div className="logonav">
        <img src={logo} alt="" />
        <nav>
          <button>Reviews</button>
          <button>Community</button>
          <button>Profile</button>
          <button>Add Review</button>
        </nav>
        <div className="hamburger">
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
