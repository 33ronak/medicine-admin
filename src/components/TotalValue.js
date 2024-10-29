import React from "react";

const TotalValue = (props) => {
    const totalPrice = props.purchaseItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h3>Total Value:  {totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default TotalValue;