import React  from 'react';
import './style.css'; 
import { useState } from 'react';
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  
    
  const submitSearch =(event) =>{
   event.preventDefault();
    alert('seacrhed');

} 

  return(
    <div classNmae="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Photos</a></li>
            <li><a href="#">New arrivals</a></li>
            
        </ul>
    <div className="search">
      <form onSubmit={submitSearch}>
      <input type="text" className="searchinput" placeholder="search"/>
     Search 
      </form>
     
        </div>
      </div>
    
      
   )

 }

export default Navbar