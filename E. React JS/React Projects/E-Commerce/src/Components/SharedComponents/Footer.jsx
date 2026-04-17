import React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { LiaFacebookSquare, LiaPinterestSquare, LiaTwitterSquare, LiaYoutubeSquare } from 'react-icons/lia';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-[#192038] pt-8 pb-3 mt-8'>
            <div className='container m-auto px-5 text-white flex flex-wrap justify-between gap-6'>
                <ul>
                    <Link to='/'><p className='text-3xl md:text-4xl font-bold cursor-pointer'>Sh<span className='main-color'>o</span>p.</p></Link>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>OUR STORY</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>SHAJGOJ MAGAZINE</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>JOIN OUR TEAM</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>AUTHENTICITY</li>
                    <hr className='mt-2' />
                    <li className='text-sm mt-2'>SHARE YOUR LOVE</li>
                    <span className='flex gap-1'>
                        <LiaFacebookSquare size={35} className='cursor-pointer' />
                        <LiaTwitterSquare size={35} className='cursor-pointer' />
                        <LiaYoutubeSquare size={35} className='cursor-pointer' />
                        <LiaPinterestSquare size={35} className='cursor-pointer' />
                    </span>
                </ul>

                <ul>
                    <li className='main-color text-xl mb-5'>TOP CATEGORIES</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>MAKEUP</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>SKIN</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>EYE CARE</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>HAIR</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>PERSONAL CARE</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>NATURAL</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>MOM & BABY</li>
                </ul>

                <ul>
                    <li className='main-color text-xl mb-5'>QUICK LINKS</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>OFFERS</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>MENS PRODUCTS</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>SKIN CONCERNS</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>NEW ARRIVAL</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>MAKEUP</li>
                </ul>

                <ul>
                    <li className='main-color text-xl mb-5'>ALL ABOUT BEAUTY</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>KNOW YOUR ROUTINE</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>HAIR CARE 101</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>SKIN CARE 101</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>MAKEUP 101</li>
                </ul>

                <ul>
                    <li className='main-color text-xl mb-5'>HELP</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>CONTACT US</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>POINTS</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>SHIPPING & DELIVERY</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>TERMS & CONDITIONS</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>REFUND & RETURN POLICY</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>TRADE LICENSE</li>
                    <li className='text-sm mt-2 hover:text-[#F73B71] cursor-pointer'>PRIVACY POLICY</li>
                </ul>
            </div>
            <div className='container m-auto px-5 mt-5 mb-2'>
                <hr className='mt-8 border-white' />
                <p className='text-center mt-3 text-white text-sm'>Copyright © 2026 ABDUL KADIR. All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;