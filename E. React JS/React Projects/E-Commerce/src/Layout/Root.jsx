import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/SharedComponents/Header';
import Footer from '../Components/SharedComponents/Footer';

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;