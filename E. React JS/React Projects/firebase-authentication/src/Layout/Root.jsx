import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;