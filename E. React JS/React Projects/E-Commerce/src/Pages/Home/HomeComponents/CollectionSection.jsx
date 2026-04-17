import React from 'react';

import womansImge from '../../../assets/image/woman.jpg'
import menImge from '../../../assets/image/men.jpg'
import kidsImge from '../../../assets/image/kids.jpg'
import { Link } from 'react-router';

const CollectionSection = () => {
    return (
        <section className='container m-auto px-5 my-8'>
            <div className='flex flex-wrap items-center justify-between gap-1'>
                <div style={{ backgroundImage: `url(${womansImge})` }} className='rounded bg-cover bg-no-repeat bg-right h-50 w-screen sm:w-73 md:w-89 lg:w-80 xl:w-100'>
                    <div className='flex flex-col items-end justify-center pr-4 md:pr-8 text-white text-end h-full w-full'>
                        <h3 className='text-2xl font-semibold sm:text-4xl md:text-3xl lg:text-4xl'>Women's <br />Collections</h3>
                        <Link to='/shop'>
                            <button className='px-3 py-1 mt-3 font-medium main-bg-color cursor-pointer'>Shop Now</button>
                        </Link>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${menImge})` }} className='rounded bg-cover bg-no-repeat bg-center my-3 h-50 w-screen sm:w-73 md:w-89 lg:w-80 xl:w-100'>
                    <div className='flex flex-col items-end justify-center pr-4 md:pr-8 text-white text-end h-full w-full'>
                        <h3 className='text-2xl font-semibold sm:text-4xl md:text-4xl '>Men's <br />Collections</h3>
                        <Link to='/shop'>
                            <button className='px-3 py-1 mt-3 font-medium main-bg-color cursor-pointer'>Shop Now</button>
                        </Link>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${kidsImge})` }} className='rounded bg-cover bg-no-repeat bg-center h-50 w-screen sm:w-73 md:w-89 lg:w-80 xl:w-100'>
                    <div className='flex flex-col items-end justify-center pr-4 md:pr-8 text-white text-end h-full w-full'>
                        <h3 className='text-2xl font-semibold sm:text-4xl md:text-4xl '>Kid's <br />Collections</h3>
                        <Link to='/shop'>
                            <button className='px-3 py-1 mt-3 font-medium main-bg-color cursor-pointer'>Shop Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CollectionSection;