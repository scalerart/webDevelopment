import { useEffect, useState } from 'react'
import '../assets/style/Shop.css'
import fakeDate from '../fakeData'
import Product from './Product';
import Cart from './Cart';
import { addToDb, getShoppingCart } from '../utilities/databaseManager';
import fakeData from '../fakeData';
import { Link } from 'react-router';

function Shop() {
    const [products, setProducts] = useState(fakeDate);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getShoppingCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey]
            return product;
        })
        setCart(previousCart);
    }, [])

    const addProdCart = (product) => {
        const toBeAddedKey = product.key
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);

        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDb(product.key, count);
    };

    return (
        <div className='shop-container'>
            <div className='shop'>
                {
                    products.map(product =>
                        <Product
                            key={product.key}
                            showAddToCart={true}
                            removeCart={false}
                            showQuantity={false}
                            showStock={true}
                            showDetails={true}
                            addProdCart={addProdCart}
                            product={product}
                        />
                    )
                }
            </div>

            <div className="cart">
                <Cart
                    cart={cart}
                >
                    <Link to="/review">
                        <button className='review-btn'>Review your order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    )
}

export default Shop