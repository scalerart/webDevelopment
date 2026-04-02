import React from 'react';
import notFoundImage from '../assets/images/NotFound.png'
import { Link } from 'react-router';

const NoMatch = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ width: '80vw', height: '80vh', position: 'relative' }} src={notFoundImage} alt="" />
            <Link to='/'>
                <button className='add-to-cart' style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translateX(-50%)' }}>Back Home</button>
            </Link>
        </div>
    );
};

export default NoMatch;
