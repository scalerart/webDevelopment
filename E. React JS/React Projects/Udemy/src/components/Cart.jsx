import React, { useContext } from 'react';
import '../assets/css/Cart.css'
import { CartContext } from '../Context/ContextProvider';
import CartProduct from './CartProduct';
import { totalItems, totalPrice } from '../Context/CartReducer';

const Cart = () => {
    const { cart  } = useContext(CartContext)

    console.log(cart);


    return (
        <section className='container my-5'>
            <div className="row">
                <div className="col-9">
                    {
                        cart.map(item =>
                            <CartProduct
                                key={item.id}
                                product={item}
                            />
                        )
                    }
                </div>
                <div className="col-3 p-2 rounded bg-primary h-75">
                    <h3 className='fs-4 text-white'>Total Items: {totalItems(cart)}</h3>
                    <h3 className='fs-4 text-white'>Total: ${totalPrice(cart)}</h3>
                    <button className="btn btn-danger">Checkout</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;





/*
import React, { useContext } from 'react';
import '../assets/css/Cart.css'
import { CartContext } from '../Context/ContextProvider';
import { RiStarFill, RiStarHalfLine } from '@remixicon/react';

const Cart = () => {
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
        <section className='cart'>
            <h2>Shopping Cart</h2>
            <h3>{cart.length} Courses in Cart</h3>

            <div className='cart-container'>
                <div>
                    {
                        cart.map(item =>
                            <div className='cart-box'>
                                <div className='cart-box-item course-box'>
                                    <img src={item.image} alt="" />
                                    <div className="course-content">
                                        <h3>{item.title}</h3>
                                        <h4>{item.instructor}</h4>
                                        <div className="rating">
                                            <span>{item.rating}</span>
                                            <RiStarFill size={15} />
                                            <RiStarFill size={15} />
                                            <RiStarFill size={15} />
                                            <RiStarFill size={15} />
                                            <RiStarHalfLine size={15} />
                                        </div>
                                        <p className='price'>{item.price}  <span> <s>$59.99</s></span></p>
                                        <span className="increase-decrease">
                                            <button className='increase' onClick={() => Decrease(cart.id)}>-</button>
                                            <span className='quantity'>0</span>
                                            <button className='decrease' onClick={() => Increase(cart.id)}>+</button>
                                        </span>
                                        <div className="button">
                                            <button className='remov-btn'>Remove</button>
                                            <span>Bestseller</span>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                <div className='total-sec'>
                    <h3>Total: </h3>
                    <button className='checkout-btn'>Proceed to Checkout</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
*/