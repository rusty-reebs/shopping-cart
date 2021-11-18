import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import App from "./App";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
  const [currentCart, setCart] = useState(0);

  const increaseNavbarCart = (quantity) => {
    setCart(currentCart + quantity); // currentCart + quantity
  };

  const decreaseNavbarCart = () => {
    setCart(currentCart - 1);
  };

  return (
    <BrowserRouter>
      <Navbar currentCart={currentCart} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/products"
          element={
            <Products
              increaseNavbarCart={increaseNavbarCart}
              decreaseNavbarCart={decreaseNavbarCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
