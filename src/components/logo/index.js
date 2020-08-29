import React from "react";
import "./style.css";
import logo from "../../Images/Logo.png";
import sideimage from "../../Images/deliveryboy.jpg"
import { findByLabelText } from "@testing-library/react";

/**
 * @author
 * @function Logo
 **/

const Logo = (props) => {
  return (
    <div classsName="logo">
      <a href="#">
        <img src={logo} alt="Foodxp" style={{ width: 120, height: 120 }} />
       
      </a>
      <div className="sideimage">
        <a href="sideimage">
        <img src={sideimage} alt="right" style={{ width: 300, height: 300, class:'right'}} />
        </a>
        
      </div>
    </div>
     
  );
};

export default Logo;
