import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); };
  return (
    <nav className="container">
      <div className="logo">
        <img src="icon.png" alt="" />
       
      </div>
      <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
      <ul className={isOpen ? 'active' : ''}>
      <li><a href="#about">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#newsletter">Newsletter</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
