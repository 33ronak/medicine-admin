import React from "react";

const MedsForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" />

                    <label htmlFor="description">Description:</label>
                    <input id="description"></input>

                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" />
                </div>

                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default MedsForm;