import React, { useState } from "react";
import ProductContext from "./product-context";

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const addToCart = (index) => {
        const updatedProducts = [...products];
        if (updatedProducts[index].quantity > 0) {
            updatedProducts[index].quantity -= 1;
            setProducts(updatedProducts);
            setCart([...cart, updatedProducts[index]]);
        }
    };

    const deleteProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, addToCart, deleteProduct, cart }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;