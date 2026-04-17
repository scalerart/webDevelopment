import React, { useContext } from 'react'
import '../assets/css/Course.css'
import { RiStarFill, RiStarHalfLine } from '@remixicon/react';
import { CartContext } from '../Context/ContextProvider';

function Course({ course }) {
    const { image, title, instructor, rating, price, id } = course;

    const { dispatch } = useContext(CartContext)

    return (
        <div className='course-box'>
            <img src={image} alt="" />
            <div className="course-content">
                <h3>{title}</h3>
                <h4>{instructor}</h4>
                <div className="rating">
                    <span>{rating}</span>
                    <RiStarFill size={15} />
                    <RiStarFill size={15} />
                    <RiStarFill size={15} />
                    <RiStarFill size={15} />
                    <RiStarHalfLine size={15} />
                </div>
                <p className='price'>{price}  <span> <s>$59.99</s></span></p>
                <div className="button">
                    <button onClick={() => dispatch({ type: "Add", course })}>Add to Cart</button>
                    <span>Bestseller</span>
                </div>
            </div>
        </div>
    )
}

export default Course