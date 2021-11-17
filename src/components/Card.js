// Card.js

import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="Card-data">
        <div className="Card-data-img-container">
          <img src={props.imageSrc} alt="Not found" height="100" />
        </div>
        <div className="Card-data-description">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          {/* quantity and add to cart */}
        </div>
        <div className="Card-data-action">
          <div className="Card-data-quantity">
            <div className="Card-data-quantity-increment">
              <h2>-</h2>
            </div>
            <div className="Card-data-quantity-number">
              <h2>0</h2>
            </div>
            <div className="Card-data-quantity-increment">
              <h2>+</h2>
            </div>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
