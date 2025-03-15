import React from 'react';
import headerImage from '../assets/images/Header.JPG';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <img src={headerImage} alt="Header" className="header-image" />
      </div>
    </header>
  );
}

export default Header;