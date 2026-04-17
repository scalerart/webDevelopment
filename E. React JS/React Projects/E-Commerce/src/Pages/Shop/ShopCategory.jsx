import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Product from '../../Components/Product';

const ShopCategory = ({ banner, category }) => {
    const { all_product } = useContext(ShopContext);

    return (
        <section className='container m-auto px-5 my-8'>
            <div>
                <img className='mb-8 rounded' src={banner} alt={`${category}_Image`} />

                <div className='my-5'>
                    <div className='grid justify-between items-center gap-4 sm:5 md:6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5'>
                        {
                            all_product.map(product => {
                                if (product.category === category) {
                                    return <Product
                                        key={product.id}
                                        product={product}
                                    />
                                } else {
                                    return null;
                                }
                            }

                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopCategory;