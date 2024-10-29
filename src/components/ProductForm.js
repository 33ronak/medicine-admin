import React, { useState } from "react";
import ProductList from "./ProductList";

const ProductForm = (props) => {
    const [enteredItemID, setEnteredItemID] = useState("");
    const [enteredItemPrice, setEnteredItemPrice] = useState("");
    const [enteredItemName, setEnteredItemName] = useState("");
    const [purchaseList, setPurchaseList] = useState([]);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const purchaseData = {
            id: Math.floor(Math.random() * 100000000),
            productId: +enteredItemID,
            price: +enteredItemPrice,
            productName: enteredItemName,
        };

        setPurchaseList((prevList) => [...prevList, purchaseData]);

        setEnteredItemID("");
        setEnteredItemPrice("");
        setEnteredItemName("");
    };

    const deleteItemHandler = (id) => {
        setPurchaseList((prevList) => prevList.filter(item => item.id !== id));
    };

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="product-id">  Product ID: </label>
                    <input
                        id="product-id"
                        type="number"
                        value={enteredItemID}
                        onChange={(e) => setEnteredItemID(e.target.value)}
                    />

                    <label htmlFor="price">  Price: </label>
                    <input
                        id="price"
                        type="number"
                        value={enteredItemPrice}
                        onChange={(e) => setEnteredItemPrice(e.target.value)}
                    />

                    <label htmlFor="productname">  Product Name: </label>
                    <input
                        id="productname"
                        type="text"
                        value={enteredItemName}
                        onChange={(e) => setEnteredItemName(e.target.value)}
                    />

                    <button type="submit"> Add Product </button>
                </div>
            </form>
            <ProductList purchaseItems={purchaseList} onDelete={deleteItemHandler} />
        </>
    );
};

export default ProductForm;