// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

const Navbar = (props) => {
  const icon = require("../img/outline_shopping_cart_white_24dp.png");

  const [isOpen, setIsOpen] = useState(false);

  const toggleCheckout = () => {
    setIsOpen(!isOpen);
  };

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
      <div className="Navbar-cart-div" onClick={toggleCheckout}>
        <img src={icon.default} alt="Not found" height="20" />
        <div className="Navbar-cart-div-number">{props.currentNavbarCart}</div>
      </div>
      {isOpen && (
        <Checkout
          handleClose={toggleCheckout}
          customerCart={props.customerCart}
          decreaseNavbarCart={props.decreaseNavbarCart}
          setNavbarCart={props.setNavbarCart}
          setCustomerCart={props.setCustomerCart}
        />
      )}
    </nav>
  );
};

export default Navbar;
