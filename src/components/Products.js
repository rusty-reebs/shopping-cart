// Products.js

import React, { useEffect } from "react";
import Card from "./Card";
import ProductList from "./Product-list";

const Products = (props) => {
  const customerCart = props.customerCart;

  const addToCart = (product, id, quantity) => {
    if (quantity > 0) {
      let item = {};
      item.name = product;
      item.id = id;
      item.quantity = quantity;
      props.setCustomerCart((customerCart) => [...customerCart, item]);
      props.increaseNavbarCart(quantity);
    }
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
