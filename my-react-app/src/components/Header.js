import React from 'react';
import headerImage from '../assets/images/Header.JPG'; 
import './Header.css';

function Header() {
  return (
    <header
      className="site-header"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
    </header>
  );
}

export default Header;