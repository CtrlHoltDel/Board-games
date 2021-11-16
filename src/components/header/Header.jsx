import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import logo from "../../image/logowhite.png";
import "../../styles/header/header.css";
import { logoutStorage } from "../../utils/localStorage";
import NavBar from "../nav/NavBar";
import MobNav from "./MobNav";

const Header = ({ setUser, user: { username } }) => {
  const [mobToggle, setMobToggle] = useState(false);

  const toggleNav = () => setMobToggle((bool) => !bool);

  const logout = () => {
    logoutStorage(setUser);
  };

  return (
    <header>
      <div className="logonav">
        <img src={logo} alt="" />
        <NavBar />
      </div>
      <div onClick={toggleNav} className="hamburger">
        <Hamburger />
      </div>
      {mobToggle && <MobNav toggleNav={toggleNav} />}
      <div className="user-nav-info">
        Logged in as {username} - <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
