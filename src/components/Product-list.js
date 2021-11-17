// product-list.js

import spice1Img from "../img/spice-1.jpg";
import tshirt1Img from "../img/tshirt-1.jpg";
import tshirt2Img from "../img/tshirt-2.jpg";
import tshirt3Img from "../img/tshirt-3.jpg";
import tshirt5Img from "../img/tshirt-5.jpg";
import cup1Img from "../img/cup-1.png";
import cup2Img from "../img/cup-2.jpg";
import book1Img from "../img/book-1.jpg";
import book2Img from "../img/book-3.jpg";

const ProductList = [
  {
    id: 1,
    name: "The Spice Must Flow Cologne",
    description:
      "An exotic scent, perfect for all occasions on Earth or Arrakis.",
    price: "$82.99",
    image: spice1Img,
  },
  {
    id: 2,
    name: "The Spice Must Flow T-Shirt",
    description: "One size only -- Large",
    price: "$29.99",
    image: tshirt1Img,
  },
  {
    id: 3,
    name: "House Atreides T-Shirt",
    description: "One size only -- Large",
    price: "$29.99",
    image: tshirt2Img,
  },
  {
    id: 4,
    name: "House Harkonnen T-Shirt",
    description: "One size only -- Large",
    price: "$29.99",
    image: tshirt3Img,
  },
  {
    id: 5,
    name: "Hard Rock Cafe Arrakis T-Shirt",
    description: "One size only -- Large",
    price: "$29.99",
    image: tshirt5Img,
  },
  {
    id: 6,
    name: "Surf Arrakis Mug",
    description: "For your anytime cup of joe -- surf's up!",
    price: "$14.99",
    image: cup1Img,
  },
  {
    id: 7,
    name: "House Atreides Mug",
    description: "The perfect gift for the coffee lover in your house.",
    price: "$14.99",
    image: cup2Img,
  },
  {
    id: 8,
    name: "Dune by Frank Herbert",
    description: "The original best-selling space opera -- paperback.",
    price: "$16.99",
    image: book1Img,
  },
  {
    id: 9,
    name: "Dune Collection by Frank Herbert",
    description:
      "The complete collection -- an essential for every book collector.",
    price: "$54.99",
    image: book2Img,
  },
];

export default ProductList;
