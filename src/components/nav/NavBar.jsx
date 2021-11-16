import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/animations/button.css";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("reviews");

  const navLink = (endpoint, buttonText) => {
    return (
      <Link
        key={endpoint}
        to={`/${endpoint}`}
        onClick={() => {
          setCurrentPage(endpoint);
        }}
      >
        <button
          className={
            currentPage === endpoint ? "full-underline" : "animated-underline"
          }
        >
          {buttonText}
        </button>
      </Link>
    );
  };

  const buttons = [
    ["reviews", "Reviews"],
    ["community", "Community"],
    ["profile", "Profile"],
    ["add_review", "Add Review"],
  ];

  return (
    <nav>
      {buttons.map(([endpoint, buttonName]) => navLink(endpoint, buttonName))}
    </nav>
  );
};

export default NavBar;
