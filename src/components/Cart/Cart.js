
import React, { useState } from "react";
import { useProductContext } from "../../store/product-context";
import Portal from "../Portal"; 
import './Cart.css'; 

const Cart = () => {
    const { cart } = useProductContext();
    const [isVisible, setIsVisible] = useState(false); 

    const toggleCartVisibility = () => {
        setIsVisible(!isVisible); 
    };

    const closeCart = () => {
        setIsVisible(false); 
    };

    return (
        <div className="cart-container">
            <button className="cart-button" onClick={toggleCartVisibility}>
                Cart ({cart.length}) 
            </button>
            {isVisible && ( 
                <Portal onClose={closeCart}>
                    <h2>Cart Items</h2>
                    {cart.length === 0 ? (
                        <p>No items in cart</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index}>
                                <h4>{item.name}</h4>
                                <p>Price: {item.price}</p>
                            </div>
                        ))
                    )}
                    <button onClick={closeCart}>Close</button>
                </Portal>
            )}
        </div>
    );
};

export default Cart;