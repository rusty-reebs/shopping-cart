// Checkout.js

import React, { useState } from "react";

const Checkout = (props) => {
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handlePurchase = () => {
    setThankYouMessage(true);
    setTimeout(() => {
      props.setCustomerCart([]);
      props.setCart(0);
      props.handleClose();
    }, 2500);
  };

  return (
    <div className="Checkout-container">
      <div className="Checkout-box">
        <span className="Checkout-close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.customerCart.length === 0 ? (
          <h3>Your Cart is Empty</h3>
        ) : (
          <h2>Your Cart</h2>
        )}
        {props.customerCart.map((product) => (
          <div className="Checkout-product" key={product.id}>
            <div>{product.quantity} - </div>
            <div className="Checkout-product-name">{product.name}</div>
          </div>
        ))}
        {props.customerCart.length > 0 && (
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
