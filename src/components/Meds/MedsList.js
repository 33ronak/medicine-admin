
import React from "react";
import { useProductContext } from "../../store/product-context";
import './MedsList.css'; 

const MedsList = () => {
    const { products, addToCart, deleteProduct } = useProductContext();

    return (
        <div className="meds-list-container">
            <h2 className="meds-list-heading">Medicine List</h2> 
            {products.length === 0 ? (
                <div className="empty-message">No products available</div>
            ) : (
                products.map((product, index) => (
                    <div className="meds-item" key={index}>
                        <span className="meds-name">{product.name}</span>
                        <span className="meds-description">{product.description}</span>
                        <span className="meds-price"> {product.price.toFixed(2)}</span>
                        <span className="meds-quantity">{product.quantity}</span>
                        <div className="meds-actions">
                            <button onClick={() => addToCart(index)} disabled={product.quantity === 0}>
                                Add to Cart
                            </button>
                            <button onClick={() => deleteProduct(index)}>Delete</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MedsList;