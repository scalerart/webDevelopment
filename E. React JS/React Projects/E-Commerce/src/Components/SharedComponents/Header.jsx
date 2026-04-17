import React, { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink} from 'react-router';
import { FiSearch, FiX } from "react-icons/fi";
import { FaRegUserCircle } from 'react-icons/fa';
import { useCart } from '../../Context/CartContext';

const Header = () => {
    const [query, setQuery] = useState("");

    const { state } = useCart();

    const totalItems = state.cartItems.reduce(
        (sum, item) => sum + item.quantity, 0);

    return (
        <header className='shadow-sm w-full sticky top-0 z-50 bg-white/90 backdrop-blur-xl'>

            <div className='flex items-center justify-between container mx-auto px-4 py-3 gap-3'>

                {/* Left Section */}
                <NavLink to='/' className='flex items-center gap-3'>
                    <p className='text-3xl md:text-4xl font-bold cursor-pointer'>Sh<span className='main-color'>o</span>p.</p>
                </NavLink>

                {/* Desktop Nav */}
                <nav className='hidden lg:flex items-center gap-6 font-medium'>
                    <NavLink className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"} to='/shop'>Shop</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"} to='/men'>Men</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"} to='/womens'>Woman</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"} to='/kids'>Kids</NavLink>
                </nav>

                {/* Search */}
                <div className="hidden sm:flex flex-1 max-w-lg mx-4">
                    <div className="relative w-full group">

                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search products..."
                            className="w-full py-2.5 pl-11 pr-11 rounded-full bg-gray-100 border border-gray-200 shadow text-gray-700  placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#F73B71] focus:ring-2 focus:ring-[#F73B71]/20"

                        />

                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#F73B71]" />

                        {query && (
                            <button onClick={() => setQuery("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                            >
                                <FiX size={18} />
                            </button>
                        )}

                    </div>
                </div>

                {/* Right Section */}
                <div className='flex items-center gap-3'>

                    <NavLink to='/login' className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"}>
                        <FaRegUserCircle size={25} className='cursor-pointer' />
                    </NavLink>

                    {/* <NavLink to='/login' className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"}>
                        <button className='font-bold px-5 py-1 rounded-full border border-[#f73B71] cursor-pointer'>Login</button>
                    </NavLink> */}

                    {/* Cart */}
                    <NavLink to='/cart' className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"} >
                        <div className='relative cursor-pointer'>
                            <IoCartOutline size={30} />
                            {
                                totalItems > 0 && (
                                    <span className='absolute text-xs -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center main-bg-color text-white'>{totalItems}</span>
                                )
                            }
                        </div>
                    </NavLink>

                </div>
            </div>

            {/* Mobile Nav + Search */}
            <div className="sm:hidden px-4 pb-3 space-y-3">

                {/* Search */}
                <div className="relative">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full py-2 pl-10 pr-10 rounded-full bg-gray-100 border border-gray-200 shadow focus:outline-none  focus:bg-white focus:border-[#F73B71] focus:ring-2 focus:ring-[#F73B71]/20"
                    />

                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 border-gray-200"
                        >
                            <FiX size={16} />
                        </button>
                    )}
                </div>

                {/* Mobile Nav */}
                <div className='flex justify-around text-sm font-medium'>
                    <NavLink to='/shop' className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"}>Shop</NavLink>
                    <NavLink to='/men' className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"}>Men</NavLink>
                    <NavLink to='/womans' className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"}>womens</NavLink>
                    <NavLink to='/kids' className={({ isActive }) => isActive ? "main-color" : "text-gray-600 hover:text-[#F73B71]"}>Kids</NavLink>
                </div>

            </div>

        </header >
    );
};

export default Header;