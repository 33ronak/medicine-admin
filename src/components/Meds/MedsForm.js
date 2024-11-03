
import React, { useState } from "react";
import { useProductContext } from "../../store/product-context";
//import './MedsForm.css';

const MedsForm = () => {
    const { addProduct } = useProductContext();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ name, price, description, quantity });
        setName("");
        setPrice(0);
        setDescription("");
        setQuantity(0);
    };

    return (
        <div className="meds-form-container">
            <h2 className="form-heading">Add Medicine</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))} />
                </div>

                <button type="submit" className="submit-button">Add Product</button>
            </form>
        </div>
    );
};

export default MedsForm;