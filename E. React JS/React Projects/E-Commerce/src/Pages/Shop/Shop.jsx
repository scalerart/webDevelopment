import React, { useContext } from 'react';
import Product from '../../Components/Product';
import { ShopContext } from '../../Context/ShopContext';

const Shop = () => {
    const { all_product } = useContext(ShopContext);



    return (
        <section className='container m-auto px-5 my-8'>
            <div className='my-5'>
                <div className='grid justify-between items-center gap-4 sm:5 md:6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5'>
                    {
                        all_product
                            .sort((a, b) => b.rating - a.rating)
                            .map(product =>
                                <Product
                                    key={product.id}
                                    product={product}
                                />
                            )
                    }
                </div>
            </div>
        </section>
    );
};

export default Shop;