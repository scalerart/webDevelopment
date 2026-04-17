import React from 'react';

const UserRatingSection = () => {
    return (
        <section className='gradiant-color mt-6'>
            <div className='container m-auto px-10 flex items-center justify-center py-6 text-white'>
                <div>
                    <h3 className='text-2xl md:text-4xl font-bold mb-2'>50K+</h3>
                    <p>Active Users</p>
                </div>
                <div className='border-x px-5 mx-5 sm:px-20 sm:mx-20 lg:px-40 lg:mx-40'>
                    <h3 className='text-2xl md:text-4xl font-bold mb-2'>200+</h3>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <h3 className='text-2xl md:text-4xl font-bold mb-2'>4.9</h3>
                    <p>Rating</p>
                </div>
            </div>
        </section>
    );
};

export default UserRatingSection;