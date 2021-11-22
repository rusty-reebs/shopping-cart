// Products.js

import React, { useEffect } from "react";
import Card from "./Card";
import ProductList from "./Product-list";

const Products = (props) => {
  const customerCart = props.customerCart;

  const addToCart = (product, id, quantity) => {
    if (quantity > 0) {
      let existingItem = customerCart.find((item) => item.name === product);
      if (existingItem) {
        let editedCustomerCart = customerCart.filter(
          (item) => item.name !== product
        );
        existingItem.quantity = existingItem.quantity + quantity;
        editedCustomerCart.push(existingItem);
        props.setCustomerCart(editedCustomerCart);
        props.increaseNavbarCart(quantity);
      } else {
        let newItem = {};
        newItem.name = product;
        newItem.id = id;
        newItem.quantity = quantity;
        props.setCustomerCart((customerCart) => [...customerCart, newItem]);
        props.increaseNavbarCart(quantity);
      }
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
