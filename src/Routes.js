import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import App from "./App";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
  const [customerCart, setCustomerCart] = useState([]);

  const [currentCart, setCart] = useState(0);

  const increaseNavbarCart = (quantity) => {
    setCart(currentCart + quantity);
  };

  const decreaseNavbarCart = (quantity) => {
    setCart(currentCart - quantity);
  };

  return (
    <BrowserRouter>
      <Navbar
        currentCart={currentCart}
        setCart={setCart}
        decreaseNavbarCart={decreaseNavbarCart}
        customerCart={customerCart}
        setCustomerCart={setCustomerCart}
      />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/products"
          element={
            <Products
              increaseNavbarCart={increaseNavbarCart}
              // decreaseNavbarCart={decreaseNavbarCart}
              customerCart={customerCart}
              setCustomerCart={setCustomerCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
