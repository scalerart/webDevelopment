import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { NavLink } from 'react-router';

const TopHeader = () => {
    return (
        <header className='shadow-md sticky top-0 w-full bg-white'>
            <nav className='container m-auto px-10 flex items-center justify-between py-5'>
                <NavLink to='/'><h1 className='text-xl md:text-3xl font-bold text-fuchsia-700'>DigiTools</h1></NavLink>

                <div className='hidden md:flex md:gap-7 items-center gap-2 '>
                    <NavLink to='/product'>Products</NavLink>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Testimonials</a>
                    <a href="#">FAQ</a>
                </div>

                <div className='flex items-center gap-2 md:gap-3 justify-center'>
                    <NavLink to='/cart'>
                        <div className='relative cursor-pointer'>
                            <HiOutlineShoppingBag size={30} />
                            <span className='absolute w-4 h-4 rounded-full bg-fuchsia-700 top-0 right-0'></span>
                        </div>
                    </NavLink>
                    <button className='cursor-pointer'>Login</button>
                    <button className='hidden md:flex gradiant-color px-4 py-2 text-white rounded-full cursor-pointer'>Get Started</button>
                </div>
            </nav>
        </header>
    );
};

export default TopHeader;