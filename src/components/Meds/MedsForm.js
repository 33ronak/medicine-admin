import React, { useState, useContext } from "react";
import ProductContext from "../../store/product-context";
import "./MedsForm.css";

const MedsForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.random() * 100000000;
    addProduct({
      id: id,
      name: name,
      price: +price,
      description: description,
      quantity: +quantity
    });
    setName("");
    setPrice(0);
    setDescription("");
    setQuantity(0);
  };

  const nameChangeHandler = (event) => setName(event.target.value);
  const priceChangeHandler = (event) => setPrice(event.target.value);
  const descriptionChangeHandler = (event) => setDescription(event.target.value);
  const quantityChangeHandler = (event) => setQuantity(event.target.value);

  return (
    <div className="group-form">
      <h1>Add Medication</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={nameChangeHandler}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          value={description}
          onChange={descriptionChangeHandler}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          value={price}
          onChange={priceChangeHandler}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={quantityChangeHandler}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default MedsForm;
