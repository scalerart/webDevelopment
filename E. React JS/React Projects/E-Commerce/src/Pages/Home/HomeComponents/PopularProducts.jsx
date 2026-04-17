import React, { useContext, useState } from 'react';
import SectionHeading from '../../../Components/SectionHeading';
import Product from '../../../Components/Product';
import { TbCategory } from 'react-icons/tb';
import { Link } from 'react-router';
import { category } from '../../../assets/category';
import { ShopContext } from '../../../Context/ShopContext';

const PopularProducts = () => {
    const { all_product } = useContext(ShopContext);


    const [categoryName, setCategoryName] = useState();

    const handleCategory = (category) => {
        setCategoryName(category)
    }

    const filterProduct = categoryName ? all_product.filter(product => product.category === categoryName) : all_product;

    return (
        <div className='container m-auto px-5 my-8'>
            <div className='flex justify-between sm:items-center'>
                <div>
                    <SectionHeading heading={"Popular"} colorHeading={"Products"} description={"Shop online for new arrivals and get free shipping!"} />
                </div>

                <div className='flex gap-2 md:gap-6'>
                    {
                        category.map(item =>
                            <p
                                key={item?.id}
                                onClick={() => handleCategory(item?.category)}
                                className={`font-medium cursor-pointer transition-colors ${item?.category === categoryName ? 'main-color' : 'text-gray-500'
                                    }`}
                            >
                                {item?.name}
                            </p>)
                    }
                </div>
            </div>

            <div className='my-5'>
                <div className='grid justify-between items-center gap-4 sm:5 md:6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5'>
                    {
                        filterProduct
                            .sort((a, b) => b.rating - a.rating)
                            .slice(0, 10)
                            .map(product =>
                                <Product
                                    key={product.id}
                                    product={product}
                                />
                            )
                    }
                </div>
            </div>

            <Link to='/shop'>
                <div className='flex items-center justify-center mt-8 cursor-pointer'>
                    <div className='flex items-center justify-center gap-2 text-white main-bg-color font-semibold py-3 w-50 rounded'>
                        <p>View All Products</p>
                        <TbCategory size={20} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PopularProducts;