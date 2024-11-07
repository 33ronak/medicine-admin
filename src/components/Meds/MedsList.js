import React, { useContext } from "react";
import ProductContext from "../../store/product-context";
import './MedsList.css'; 

const MedsList = () => {
    const { products, addToCart, deleteProduct } = useContext(ProductContext);

    return (
        <div className="meds-list-container">
            <h2 className="meds-list-heading">Medicine List</h2> 
            {products.length === 0 ? (
                <div className="empty-message">No products available</div>
            ) : (
                products.map((product) => (
                    <div className="meds-item" key={product.id}>
                        <span className="meds-name">{product.name}</span>
                        <span className="meds-description">{product.description}</span>
                        <span className="meds-price"> ₹ {product.price.toFixed(2)}</span>
                        <span className="meds-quantity">{product.quantity}</span>
                        <div className="meds-actions">
                            <button onClick={() => addToCart(product.id)} disabled={product.quantity === 0}>
                                Add to Cart
                            </button>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MedsList;
