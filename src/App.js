import React from "react";
import ProductProvider from "./store/ProductProvider";
import MedsForm from "./components/Meds/MedsForm";
import MedsList from "./components/Meds/MedsList";
import Cart from "./components/Cart/Cart";

const App = () => {
    return (
        <ProductProvider>
            <div>
                <Cart />
                <MedsForm />
                <MedsList />
            </div>
        </ProductProvider>
    );
};

export default App;