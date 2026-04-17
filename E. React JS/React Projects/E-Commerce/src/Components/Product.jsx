import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Product = ({ product }) => {
    const { image, name, new_price, old_price, id } = product;

    return (
        <div>
            <Link to={`/product/${id}`}>
                <div className='sm:w-48 md:w-44 lg:w-55 xl:w-58 m-auto flex flex-col shadow border overflow-hidden border-gray-200'>
                    <div className='sm:w-48 md:w-44 lg:w-55 xl:w-58 m-auto overflow-hidden'>
                        <img className='object-cover scale-103 hover:scale-108 transition' src={image} alt={name} />
                    </div>

                    <div className='px-2 pb-2 md:px-4'>
                        <h3 className='text-gray-600 my-2'>{name}</h3>

                        <div className='flex gap-1 text-orange-500 my-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <div className='flex gap-5 text-gray-500 items-center'>
                            <span className='flex items-center main-color text-xl font-semibold'>৳{new_price}</span>
                            <span className='flex items-center text-md line-through'>৳{old_price}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;