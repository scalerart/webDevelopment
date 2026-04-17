import React from 'react';

const SectionHeading = ({ heading, colorHeading, description }) => {
    return (
        <div>
            <h3 className='text-2xl md:5xl font-bold text-gray-700'>{heading} <span className='main-color'>{colorHeading}</span></h3>
            <p className='text-gray-500'>{description}</p>
        </div>
    );
};

export default SectionHeading;