import React from 'react';
import exclusiveImage from '../../../assets/image/execulisive colloction.jpg'
import { Link } from 'react-router';


const ExclusiveSection = () => {
    return (
        <section className='container m-auto px-5 my-8'>
            <Link to='/shop'>
                <div style={{ backgroundImage: `url(${exclusiveImage})` }} className='bg-cover bg-no-repeat bg-center h-100 rounded'>
                    <div className=' flex flex-col items-end justify-center pr-4 md:pr-15 text-white text-end h-full'>
                        <p className=' mb-1 text-xl sm:text-2xl lg:text-3xl'>30% off sale</p>
                        <h3 className='text-2xl font-semibold leading-7 sm:leading-12 sm:text-4xl md:text-5xl lg:text-5xl '>Latest Exclusive <br />Summer Collection</h3>
                        <button className='px-3 py-1 mt-3 font-medium main-bg-color'>Shop Now</button>
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default ExclusiveSection;