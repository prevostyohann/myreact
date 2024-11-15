import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS for styling
import "../Bulma/css/bulma.min.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar box">
      <div className="navbar-burger" onClick={toggleNavbar}>
        <span className={`bar ${isActive ? 'is-active' : ''}`}></span>
        <span className={`bar ${isActive ? 'is-active' : ''}`}></span>
        <span className={`bar ${isActive ? 'is-active' : ''}`}></span>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        {/* Your menu items here */}
        <a className="navbar-item" href="/home">Home</a>
        <a className="navbar-item" href="/about">About</a>
        <a className="navbar-item" href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
