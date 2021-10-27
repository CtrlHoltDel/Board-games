import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logowhite.png';
import '../../styles/header/header.css';
import NavBar from '../nav/NavBar';
import MobNav from './MobNav';

const Header = () => {
  const [mobToggle, setMobToggle] = useState(false);

  const toggleNav = () => setMobToggle((bool) => !bool);

  return (
    <header>
      <div className="colour-accent"></div>
      <div className="logonav">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <NavBar />
      </div>
      <div onClick={toggleNav} className="hamburger">
        <Hamburger />
      </div>
      {mobToggle && <MobNav />}
    </header>
  );
};

export default Header;
