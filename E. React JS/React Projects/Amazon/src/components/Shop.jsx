import React, { useState } from 'react'
import '../assets/style/Shop.css'
import fakeDate from '../fakeData'
import Product from './Product';
import Cart from './Cart';

function Shop() {
    const [products, setProducts] = useState(fakeDate);
    const [cart, setCart] = useState([])

    const addProdCart = (product) => {
        setCart([...cart, product])
    }

    return (
        <div className='shop-container'>
            <div className='shop'>
                {
                    products.map(product =>
                        <Product
                            addProdCart={addProdCart}
                            key={product.key}
                            product={product}
                        />
                    )
                }
            </div>

            <div className="cart">
                <Cart cart={cart} />
            </div>
        </div>
    )
}

export default Shop