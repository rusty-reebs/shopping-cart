// Card.js

import React, { useState } from "react";

const Card = (props) => {
  const addIcon = require("../img/add-outline.png");
  const removeIcon = require("../img/remove-outline.png");
  const addCartIcon = require("../img/add-cart.png");

  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity === 0) setQuantity(0);
    else setQuantity(quantity - 1);
  };

  const handleAddToCart = (product, id, quantity) => {
    props.addToCart(product, id, quantity);
    setQuantity(0);
  };

  return (
    <div className="Card">
      <div className="Card-data">
        <div className="Card-data-img-container">
          <img src={props.imageSrc} alt="Not found" />
        </div>
        <div className="Card-data-description">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className="Card-data-action">
          <div className="Card-data-quantity">
            <img
              src={removeIcon.default}
              alt="Remove"
              height="25"
              onClick={() => handleDecrease()}
            />
            <div className="Card-data-quantity-number">
              <h2>{quantity}</h2>
            </div>
            <img
              src={addIcon.default}
              alt="Add"
              height="25"
              onClick={() => handleIncrease()}
            />
            <img
              id="cart"
              src={addCartIcon.default}
              alt="Add to Cart"
              height="25"
              onClick={() => handleAddToCart(props.name, props.id, quantity)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
