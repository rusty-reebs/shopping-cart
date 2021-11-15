// Navbar.js

import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <ul className="Navbar-nav-links">
        <li className="Navbar-nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="Navbar-nav-item">
          <Link to="/products">Store</Link>
        </li>
      </ul>
      <button>Cart</button>
    </nav>
  );
};

export default Navbar;
