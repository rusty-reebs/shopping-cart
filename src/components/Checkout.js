// Checkout.js

import React, { useState } from "react";

const Checkout = (props) => {
  const closeIcon = require("../img/close-x.png");

  const [thankYouMessage, setThankYouMessage] = useState(false);

  const customerCart = props.customerCart; //! remove?

  const handlePurchase = () => {
    setThankYouMessage(true);
    setTimeout(() => {
      props.setCustomerCart([]);
      props.setCart(0);
      props.handleClose();
    }, 2500);
  };

  // customerCart array needs to find duplicates and get totals
  //   const processCustomerCart = () => {
  //   customerCart.forEach(item => {
  // const sameProducts = customerCart.filter(
  //   (product) => product.name == item.name
  // );
  // console.log("duplicates", sameProducts);
  //   };
  //   processCustomerCart();

  return (
    <div className="Checkout-container">
      <div className="Checkout-box">
        {/* <span className="Checkout-close-icon" onClick={props.handleClose}>
          x
        </span> */}
        <div className="Checkout-top">
          <img
            src={closeIcon.default}
            alt="Close"
            onClick={props.handleClose}
          />
        </div>
        {customerCart.length === 0 ? (
          <h3>Your Cart is Empty</h3>
        ) : (
          <h2>Your Cart</h2>
        )}
        {customerCart.map((product) => (
          <div className="Checkout-product" key={product.id}>
            <div>{product.quantity} - </div>
            <div className="Checkout-product-name">{product.name}</div>
          </div>
        ))}
        {customerCart.length > 0 && (
          <button onClick={handlePurchase}>Buy Now</button>
        )}
        {thankYouMessage && (
          <div className="Checkout-thank-you">
            <h3>Thanks for shopping!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
