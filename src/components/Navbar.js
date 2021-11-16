// Navbar.js

import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  let icon = require("../img/outline_shopping_cart_white_24dp.png");

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
      <div className="Navbar-cart-div">
        <img src={icon.default} alt="Not found" height="20" />
        <div className="Navbar-cart-div-number">0</div>
        {/* if items=0 then do not display */}
      </div>
    </nav>
  );
};

export default Navbar;
