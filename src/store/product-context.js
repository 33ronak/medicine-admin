import React from "react";

const ProductContext = React.createContext({
  products: [],
  cart: [],
  addProduct: (product) => {},
  addToCart: (index) => {},
  deleteProduct: (index) => {},
});

export default ProductContext;
