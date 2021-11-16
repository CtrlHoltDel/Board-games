import NavBar from "../nav/NavBar";

const MobNav = ({ toggleNav, username }) => {
  return (
    <div className="mob-nav">
      <NavBar toggleNav={toggleNav} username={username} />
    </div>
  );
};

export default MobNav;
