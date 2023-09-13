import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

function Navbar() {
  return (
    <nav className="taskbar">
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/IceCream">Flavors</Link></li>
        <li><Link to="/Catering">Catering Services</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>

  

  );
}

export default Navbar;
