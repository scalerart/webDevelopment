import React, { createContext } from 'react';
import { all_product } from '../Data/Data';

export const ProductContext = createContext();

const ProductsContextProvider = ({ children }) => {

    const contextValue = {all_product}

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsContextProvider;