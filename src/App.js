// App.js

import React from "react";
import { Link } from "react-router-dom";

function App() {
  let image = require("./img/dune-1.png");

  return (
    <div className="App">
      <div className="App-title-image-div">
        <img src={image.default} alt="Not found" />
      </div>
      <div className="App-title-text-div">
        <h1>Welcome to the Dune Store</h1>
        <h3>A project coded in React and plain CSS</h3>
        <Link to="/shopping-cart/products" className="App-title-button">
          Shop Now!
        </Link>
      </div>
    </div>
  );
}

export default App;
