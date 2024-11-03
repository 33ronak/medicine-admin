import { createContext, useContext } from "react";

const ProductContext = createContext();

export const useProductContext = () => {
    const context = useContext(ProductContext);
    return context;
};

export default ProductContext;