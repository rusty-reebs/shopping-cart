// Checkout.js

import React, { useState } from "react";

const Checkout = (props) => {
  const closeIcon = require("../img/close-x.png");
  const trashIcon = require("../img/trash-outline.png");

  const customerCart = props.customerCart;

  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handlePurchase = () => {
    setThankYouMessage(true);
    setTimeout(() => {
      props.setCustomerCart([]);
      props.setNavbarCart(0);
      props.handleClose();
    }, 2500);
  };

  const handleDeleteItem = (product) => {
    let deletedItem = customerCart.find((item) => item.name === product.name);
    let editedCustomerCart = customerCart.filter(
      (item) => item.name !== product.name
    );
    props.setCustomerCart(editedCustomerCart);
    props.decreaseNavbarCart(deletedItem.quantity);
  };

  return (
    <div className="Checkout-container">
      <div className="Checkout-box">
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
            <div>{product.quantity}&nbsp;-&nbsp;</div>
            <div className="Checkout-product-name">{product.name}</div>
            <img
              src={trashIcon.default}
              alt="Trash"
              onClick={() => handleDeleteItem(product)}
            />
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
