import NavBar from "../nav/NavBar";

const MobNav = ({ toggleNav }) => {
  return (
    <div className="mob-nav">
      <NavBar toggleNav={toggleNav} />
    </div>
  );
};

export default MobNav;
