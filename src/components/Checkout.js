// Checkout.js

import React from "react";

const Checkout = (props) => {
  const customerCart = props.customerCart;

  const checkoutItems = [];
  customerCart.forEach((thing) => {
    checkoutItems.push(
      <div>
        <div>{thing.name}</div>
        <div>{thing.quantity}</div>
      </div>
    );
  });
  return (
    <div className="Checkout-container">
      <h2>Here's your checkout!</h2>
      {checkoutItems}
    </div>
  );
};

export default Checkout;
