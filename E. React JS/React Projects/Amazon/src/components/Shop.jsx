import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import { addToDb, getShoppingCart } from "../utilities/databaseManager";
import fakeData from "../fakeData";
import { Link } from "react-router";

function Shop() {
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getShoppingCart();
        const productKeys = Object.keys(saveCart);

        const previousCart = productKeys.map((key) => {
            const product = fakeData.find((pd) => pd.key === key);
            if (product) {
                product.quantity = saveCart[key];
            }
            return product;
        });

        setCart(previousCart);
    }, []);

    const addProdCart = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);

        let count = 1;
        let newCart;

        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter((pd) => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDb(product.key, count);
    };

    return (
        <div className="pt-8 px-4 md:px-8 lg:px-12 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Shop Products
                </h1>
                <p className="text-sm text-gray-500">
                    Find the best deals and add to your cart
                </p>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">

                {/* Products */}
                <div className="lg:col-span-3">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {products.map((product) => (
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
                        ))}

                    </div>

                </div>

                {/* Cart Sidebar */}
                <div className="lg:col-span-1 order-first lg:order-last">
                    <div className="bg-white p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 sticky top-24">

                        <Cart cart={cart}>
                            <Link to="/review">
                                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 rounded-xl mt-4 transition font-medium shadow-md cursor-pointer">
                                    Review Your Order
                                </button>
                            </Link>
                        </Cart>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Shop;