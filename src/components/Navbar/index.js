import React from "react";
import "./style.css";
import searchIcon from "../../assets/Icons/search.png";
import { NavLink } from "react-router-dom";
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
        <li><NavLink to="/">Home</NavLink></li>
        <li> <NavLink  to="/AboutUs">AboutUs</NavLink></li>
        <li> <NavLink  to="/Franchise">Franchise</NavLink></li>
        <li> <NavLink  to="/News">News</NavLink></li>
        <li> <NavLink  to="/contact-Us">contactUs</NavLink></li>
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
