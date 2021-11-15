// App.js

import React from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  let image = require("./img/dune-1.png");

  return (
    <div className="App">
      <Navbar />
      <div className="App-title-image-div">
        <img src={image.default} alt="Not found" />
      </div>
      <div className="App-title-text-div">
        <h1>Welcome to the Dune Store</h1>
        <h3>A project coded in React and plain CSS</h3>
        {/* </div> */}
        {/* <div className="App-shop-button-div"> */}
        <Link to="/products" className="App-title-button">
          Shop Now!
        </Link>
      </div>
    </div>
  );
}

export default App;
