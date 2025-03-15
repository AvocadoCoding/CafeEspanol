import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/menu">Menu</Link>
        <Link to="/takeaway">Takeaway</Link>
        <Link to="/contactus">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;