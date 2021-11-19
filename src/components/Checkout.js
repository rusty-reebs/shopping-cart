// Checkout.js

import React from "react";

const Checkout = (props) => {
  const customerCart = props.customerCart;
  console.log(customerCart);

  return (
    <div className="Checkout-container">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <p>Here's your checkout!</p>
        {customerCart.map((product) => (
          <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.quantity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
