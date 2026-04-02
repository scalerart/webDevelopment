import React, { useEffect, useState } from 'react';
import '../assets/style/Review.css'
import { getShoppingCart, processOrder, removeFromDb } from '../utilities/databaseManager';
import fakeData from '../fakeData';
import Cart from './Cart';
import Product from './Product';
import { Link } from 'react-router';
import happyImage from '../assets/images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false)

    const handlePlaceOrder = () => {
        setCart([])
        setOrderPlaced(true)
        processOrder()
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDb(productKey);
    }

    useEffect(() => {
        const saveCart = getShoppingCart();
        const productKeys = Object.keys(saveCart);

        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProduct);
    }, [])

    let thankYou;
    if (orderPlaced) {
        thankYou = <img style={{ width: '70vw', height: '75vh', marginTop: '25px', overflow: 'hidden' }} src={happyImage} alt="" />
    }

    return (
        <section className='shop-container'>
            <div className="shop">
                {
                    cart.map(pd =>
                        <Product
                            key={pd.key}
                            removeCart={true}
                            showQuantity={true}
                            showStock={false}
                            showDetails={false}
                            removeProduct={removeProduct}
                            product={pd}
                        />)
                }
                {thankYou}
            </div>
            <div className="cart">
                <Cart
                    cart={cart}
                >
                    <Link to="/review">
                        <button onClick={handlePlaceOrder} className='review-btn'>Place Order</button>
                    </Link>
                </Cart>
            </div>
        </section>
    );
};

export default Review;