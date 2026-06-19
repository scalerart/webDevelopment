import React from 'react';
import heroImage from '../../../assets/images/bannerbackground.png'

const HeroSection = () => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${heroImage})` }} className='bg-cover bg-no-repeat bg-center w-screen h-[85vh] flex flex-col items-center justify-center'>
                <div className='text-center container m-auto px-5 py-5'>
                    <h1 className='text-3xl md:text-5xl font-semiboldbold mb-6'>Best food waiting for your belly</h1>
                    <div>
                        <input className='bg-white py-2 px-4 md:pr-20 rounded-l-full outline-0' type="text" name="" id="" placeholder='Search food items' />
                        <button className='py-2 px-4 bg-red-500 text-white rounded-r-full  cursor-pointer'>Search</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
