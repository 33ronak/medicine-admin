import React from "react";
import ProductProvider from "./store/ProductProvider.js";
import MedsForm from "./components/Meds/MedsForm.js";
import MedsList from "./components/Meds/MedsList.js";
import Cart from "./components/Cart/Cart.js";

function App() {
    return (
        <ProductProvider>
            <MedsForm />
            <MedsList />
            <Cart />
        </ProductProvider>
    );
}

export default App;
