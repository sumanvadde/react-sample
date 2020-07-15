import React from "react";
import "./style.css";
import searchIcon from "../../assets/Icons/search.png";
/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const submitSearch = (event) => {
    event.preventDefault();
    alert("seacrhed");
  };

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <a href="#">Photos</a>
        </li>
        <li>
          <a href="#">New arrivals</a>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className="search-input" placeholder="search" />
          <img className="search-icon" src={searchIcon} alt="Search Icon" />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
