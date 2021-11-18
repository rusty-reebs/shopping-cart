// Card.js

import React from "react";

const Card = (props) => {
  let addIcon = require("../img/add.png");
  let removeIcon = require("../img/remove.png");
  let addCartIcon = require("../img/add-cart.png");

  return (
    <div className="Card">
      <div className="Card-data">
        <div className="Card-data-img-container">
          <img src={props.imageSrc} alt="Not found" height="100" />
        </div>
        <div className="Card-data-description">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className="Card-data-action">
          <div className="Card-data-quantity">
            {/* <div */}
            {/* className="Card-data-quantity-increment" */}
            {/* //   onClick={() => props.handleDecrease(props.quantity)} */}
            {/* > */}
            {/* <h3>-</h3> */}
            <img src={removeIcon.default} alt="Not found" height="25" />

            {/* </div> */}
            <div className="Card-data-quantity-number">
              <h2>{props.quantity}</h2>
            </div>
            {/* <div */}
            {/* className="Card-data-quantity-increment" */}
            {/* onClick={() => props.handleIncrease(props.id)} */}
            {/* > */}
            {/* <h3>+</h3> */}
            <img src={addIcon.default} alt="Not found" height="25" />

            {/* </div> */}
            <img
              id="cart"
              src={addCartIcon.default}
              alt="Not found"
              height="25"
              onClick={() => props.addToCart(props.name)}
            />
          </div>
          {/* <button onClick={() => props.addToCart(props.name)}> */}
          {/* Add to Cart */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
