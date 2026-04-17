import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <h1>Footer</h1>
        </div>
    );
};

export default Root;