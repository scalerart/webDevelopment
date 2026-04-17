import React from 'react';
import bannerImg from '/banner.png'

const HeroSection = () => {
    return (
        <section className='container m-auto px-10 my-3'>
            <div className='md:flex gap-5 items-center justify-center'>
                <div className='text-center md:text-left'>
                    <span className=' bg-[#E1E7FF] px-4 py-2 w-74 rounded-full flex gap-3 basis-full items-center'>
                        <span className='w-4 h-4 gradiant-color rounded-full'></span>
                        <p className='inline-block text-[#9614fae1]'>New: AI-Powered Tools Available</p>
                    </span>
                    <h1 className='font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-7xl my-5  lg:leading-21'>Supercharge Your <br />Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
                    <div className='flex items-center justify-center md:justify-start gap-4 mt-5'>
                        <button className='gradiant-color px-4 py-2 text-white rounded-full cursor-pointer'>Explore Produtcs</button>
                        <button className='border border-fuchsia-700 text-fuchsia-700 px-4 py-2 rounded-full cursor-pointer'>Watch Demo</button>
                    </div>
                </div>
                <div className='mt-5'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;