import React from 'react';
import Navbar from './HomeComponents/Navbar';
import HeroSection from './HomeComponents/HeroSection';
import Products from '../../Components/Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Products />
        </div>
    );
};

export default Home;