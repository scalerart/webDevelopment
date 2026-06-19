import React from 'react';

const ProductCart = ({ product }) => {
    console.log(product);

    return (
        <div>
            {
                <p>{product.name}</p>
            }
        </div>
    );
};

export default ProductCart;