import React from 'react';
import HeroSection from './HomeComponents/HeroSection';
import PopularProducts from './HomeComponents/PopularProducts';
import ExclusiveSection from './HomeComponents/ExclusiveSection';
import DayOfTheDeal from './HomeComponents/DayOfTheDeal';
import CollectionSection from './HomeComponents/CollectionSection';
import Support from './HomeComponents/Support';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <PopularProducts />
            <ExclusiveSection />
            <DayOfTheDeal />
            <CollectionSection />
            <Support />
        </main>
    );
};

export default Home;