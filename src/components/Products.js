// Products.js

import React, { useState, useEffect } from "react";
import Card from "./Card";
import ProductList from "./Product-list";

const Products = (props) => {
  const increaseNavbarCart = props.increaseNavbarCart;

  // const [customerCart, setCustomerCart] = useState([]);
  let customerCart = props.customerCart;
  let setCustomerCart = props.setCustomerCart;

  const addToCart = (product, id, quantity) => {
    if (quantity > 0) {
      let item = {};
      item.name = product;
      item.id = id;
      item.quantity = quantity;
      console.log(item);
      setCustomerCart((customerCart) => [...customerCart, item]);
      increaseNavbarCart(quantity);
    }
    console.log(customerCart);
  };

  useEffect(() => {
    console.log("here's the customerCart", customerCart);
  });

  return (
    <div className="Products">
      <div className="Products-container">
        {ProductList.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            imageSrc={product.image}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
