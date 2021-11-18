// Products.js

import React, { useState, useEffect } from "react";
import Card from "./Card";
import Checkout from "./Checkout";
import ProductList from "./Product-list";

const Products = (props) => {
  const increaseNavbarCart = props.increaseNavbarCart;

  const [customerCart, setCustomerCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      let item = {};
      item.name = product;
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

  //! change to map?
  const productCatalog = [];
  ProductList.forEach((product) => {
    productCatalog.push(
      <Card
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        imageSrc={product.image}
        addToCart={addToCart}
      />
    );
  });

  return (
    <div className="Products">
      <div className="Products-container">{productCatalog}</div>
      {/* <Checkout customerCart={customerCart} /> */}
    </div>
  );
};

export default Products;
