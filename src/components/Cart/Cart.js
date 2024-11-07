import React, { useState, useContext } from "react";
import ProductContext from "../../store/product-context";
import Portal from "../Modal/Portal";
import './Cart.css';

const Cart = () => {
    const { cart } = useContext(ProductContext);
    const [isVisible, setIsVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsVisible(!isVisible);
    };

    const closeCart = () => {
        setIsVisible(false);
    };

    const totalAmount = cart.reduce((total, item) => total + item.price, 0);

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
                        <>
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-price">₹ {item.price.toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="cart-total">
                                <span>Total:</span>
                                <span>₹ {totalAmount.toFixed(2)}</span>
                            </div>
                        </>
                    )}
                    <button onClick={closeCart}>Close</button>
                </Portal>
            )}
        </div>
    );
};

export default Cart;
