import React from "react";
import "./style.css";
import logo from "../../Images/Logo.png";

/**
 * @author
 * @function Logo
 **/

const Logo = (props) => {
  return (
    <div classsName="logo">
      <a href="#">
        <img src={logo} alt="Foodxp" style={{ width: 100, height: 100 }} />
      </a>
    </div>
  );
};

export default Logo;
