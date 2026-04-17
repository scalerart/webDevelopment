import React, { useContext } from 'react';
import { CartContext } from '../Context/ContextProvider';

const CartProduct = ({ product }) => {
    const { image, title, price, quantity, id } = product;

    const { cart, dispatch } = useContext(CartContext)

    const Increase = (id) => {
        const Index = cart.findIndex(item => item.id === id);
        if (cart[Index].quantity < 10) {
            dispatch({ type: "Increase", id })
        }
    };
    const Decrease = (id) => {
        const Index = cart.findIndex(item => item.id === id);
        if (cart[Index].quantity > 1) {
            dispatch({ type: "Decrease", id })
        }
    };

    return (
        <div className='d-flex gap-3 align-items-center my-3'>
            <img src={image} className='img-fluid w-25' alt="" />
            <div className=''>
                <h3 className='fs-4'>{title}</h3>
                <h4 className='fs-5'>{price}</h4>
                <div className='d-flex gap-2'>
                    <button className='btn btn-primary' onClick={() => Decrease(id)}>-</button>
                    <button className='btn border-primary'>{quantity}</button>
                    <button className='btn btn-primary' onClick={() => Increase(id)}>+</button>
                </div>
                <button className='btn btn-danger mt-2 px-4' onClick={() => dispatch({ type: "Remove", id })}>Remove</button>
            </div>
        </div>
    );
};

export default CartProduct;