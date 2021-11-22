import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import App from "./App";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
  const [customerCart, setCustomerCart] = useState([]);
  const [currentNavbarCart, setNavbarCart] = useState(0);

  const increaseNavbarCart = (quantity) => {
    setNavbarCart(currentNavbarCart + quantity);
  };
  const decreaseNavbarCart = (quantity) => {
    setNavbarCart(currentNavbarCart - quantity);
  };

  return (
    <BrowserRouter>
      <Navbar
        currentNavbarCart={currentNavbarCart}
        setNavbarCart={setNavbarCart}
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
