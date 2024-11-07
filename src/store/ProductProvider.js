import React, { useState } from "react";
import ProductContext from "./product-context";

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    const addToCart = (id) => {
        setProducts((prevProducts) => {
            const updatedProducts = [];
            let productToAdd = null;
    
            const newProducts = prevProducts.map((product) => {
                if (product.id === id && product.quantity > 0) {
                    productToAdd = { ...product, quantity: 1 }; 
                    return { ...product, quantity: product.quantity - 1 }; 
                }
                return product;
            });

            if (productToAdd) {
                setCart((prevCart) => [...prevCart, productToAdd]);
            }
            return newProducts;
        });
    };
    

    const deleteProduct = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    const contextValue = {
        products,
        cart,
        addProduct,
        addToCart,
        deleteProduct,
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
