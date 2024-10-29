import React from "react";
import TotalValue from "./TotalValue";

const ProductList = (props) => {
    const handleDelete = (id) => {
        props.onDelete(id);
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {props.purchaseItems.map((item) => (
                    <li key={item.id}>
                        {`${item.price.toFixed(2)} - ${item.productName}  `}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <TotalValue purchaseItems={props.purchaseItems} />
        </div>
    );
};

export default ProductList;