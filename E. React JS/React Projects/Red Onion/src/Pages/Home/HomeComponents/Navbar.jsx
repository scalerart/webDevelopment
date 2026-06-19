import React from 'react';
import logo from '../../../assets/images/logo2.png'
import { IoMdCart } from 'react-icons/io';

const Navbar = () => {
    return (
        <nav className="container m-auto px-5 py-5">
            <div className="flex justify-between items-center">
                <img className='w-25 md:w-35 cursor-pointer' src={logo} alt="logo" />

                <div className='flex gap-3 items-center justify-center font-semibold'>
                    <IoMdCart size={25} cursor={'pointer'} />
                    <button className='px-4 py-1 border border-red-500 rounded-full cursor-pointer'>Login</button>
                    <button className='text-white px-4 py-1 bg-red-500 rounded-full cursor-pointer'>Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;