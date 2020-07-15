import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header classNamer='header'>
        <nav className='headerMenu'>
            <a href='#'>Home</a>
            <a href='#'>About us</a>
            <a href='#'>Contact us</a>
                    </nav>
        <div>
          Social Media Icons
        </div>
    </header>
   )

 }

export default Header