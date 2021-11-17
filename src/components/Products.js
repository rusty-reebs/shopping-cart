// Products.js

import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import ProductList from "./Product-list";

const Products = () => {
  // run an array function build an array of product cards <Card, <Card, <Card
  // populate cards with a product object or JSON
  const currentProducts = [];
  ProductList.forEach((product) => {
    currentProducts.push(
      <Card
        key={product.id}
        name={product.name}
        description={product.description}
        imageSrc={product.image}
      />
    );
  });

  return (
    <div className="Products">
      <Navbar />
      <div className="Products-container">
        {/* put array of product cards here */}
        {currentProducts}
      </div>
    </div>
  );
};

export default Products;
