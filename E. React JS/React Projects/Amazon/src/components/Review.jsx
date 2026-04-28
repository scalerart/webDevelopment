import React, { useEffect, useState } from "react";
import {
  getShoppingCart,
  processOrder,
  removeFromDb,
} from "../utilities/databaseManager";
import fakeData from "../fakeData";
import Cart from "./Cart";
import happyImage from "../assets/images/giphy.gif";
import { RiDeleteBin6Line } from "@remixicon/react";
import { Link, useNavigate } from "react-router";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate()

  const handleProceedCheckout = () => {
    if (cart.length > 0) {
      navigate('/shipment')
    }
  };

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDb(productKey);
  };

  useEffect(() => {
    const saveCart = getShoppingCart();
    const productKeys = Object.keys(saveCart);

    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      if (product) {
        product.quantity = saveCart[key];
      }
      return product;
    });

    setCart(cartProduct);
  }, []);

  return (
    <section className="pt-8 px-4 md:px-8 lg:px-12 bg-gray-50 min-h-screen">

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Review Your Order</h1>
        <p className="text-gray-500 text-sm">Check your items before placing the order</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT: Product List */}
        <div className="lg:col-span-3 space-y-4 ">

          {/* Empty State */}
          {cart.length === 0 && !orderPlaced && (
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold text-gray-700 text-center">Your cart is empty</h2>
              <p className="text-gray-500 text-sm mt-1 text-center">Add some products to continue shopping</p>
              <Link to='/shop' className="text-center"><p>Go to Shop →</p></Link>
            </div>
          )}

          {/* Product Cards */}
          {cart.map((pd) => (
            <div
              key={pd.key}
              className="flex gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={pd.img}
                  alt={pd.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-grow">
                <h4 className="font-semibold text-gray-800 line-clamp-2">{pd.name}</h4>
                <p className="text-xs text-gray-500 mt-1">By {pd.seller}</p>

                <div className="flex items-center justify-between mt-auto pt-2">
                  <div>
                    <p className="text-orange-500 font-bold">${pd.price}</p>
                    <p className="text-xs text-gray-500">Qty: {pd.quantity}</p>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeProduct(pd.key)}
                    className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm transition cursor-pointer"
                  >
                    <RiDeleteBin6Line />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Success State */}
          {orderPlaced && (
            <div className="flex justify-center items-center bg-white p-6 rounded-xl shadow mt-6">
              <img
                src={happyImage}
                alt="Order Success"
                className="w-full max-w-md rounded-xl"
              />
            </div>
          )}
        </div>

        {/* RIGHT: Cart Summary */}
        <div className="lg:col-span-1 order-first lg:order-last">
          <div className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition duration-300 sticky top-24">

            <Cart cart={cart}>
              <button
                onClick={handleProceedCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg  transition font-medium cursor-pointer"
              >
                Proceed Checkout
              </button>
            </Cart>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;