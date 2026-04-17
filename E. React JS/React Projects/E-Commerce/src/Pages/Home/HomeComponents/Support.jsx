import React from 'react';
import { AiFillBank } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import { PiContactlessPayment } from 'react-icons/pi';

const features = [
    {
        id: 1,
        title: "Free Shipping",
        subtitle: "Free shipping on all US order or order above $200",
        icon: <PiContactlessPayment className='text-4xl cp mx-auto' />
    },
    {
        id: 2,
        title: "24x7 Support",
        subtitle: "Contact us 24 hours a day, 7 days a week",
        icon: < AiFillBank className='text-4xl cp mx-auto' />
    },
    {
        id: 3,
        title: "30 Days Return",
        subtitle: "Simply return it within 30 days for an exchange",
        icon: < IoCartOutline className='text-4xl cp mx-auto' />
    },
    {
        id: 4,
        title: "Payment Secure",
        subtitle: "Secure payment processing available 24/7",
        icon: <BiSupport className='text-4xl cp mx-auto' />
    }
];

const Support = () => {
    return (
        <section className='container m-auto px-5 my-8'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    features.map(f => (
                        <div className='border my-2 border-gray-300 text-center rounded-md px-4 py-6 flex flex-col items-center justify-center'>
                            <span className='mb-3 main-color'>{f.icon}</span>
                            <p className=' text-gray-500 font-semibold'>{f.title}</p>
                            <p className='ts  text-gray-500'>{f.subtitle}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Support;