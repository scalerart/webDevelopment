import { FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router";
import { useCart } from "../Context/CartContext";

const Cart = () => {
    const { state, dispatch } = useCart();
    const { cartItems } = state;

    const subtotal = cartItems.reduce((acc, item) => acc + item.new_price * item.quantity, 0);

    const shipping = 50;
    const total = subtotal + shipping;

    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className='container m-auto px-5 my-8'>
                <div className="bg-white p-6 rounded-xl shadow text-center border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-600">Your <span className="text-black">Sh<span className="text-[#F73B71]">o</span>p</span> Store Cart is empty</h1>
                    <button
                        onClick={() => navigate("/shop")}
                        className="mt-10 px-8 py-3 rounded-3xl flex-1 bg-[#F73B71] text-white font-medium hover:opacity-90 transition cursor-pointer"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        );
    }


    return (
        <section className="">
            <div className="min-h-screen bg-gray-100 pt-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* LEFT - CART ITEMS */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
                        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between border-b border-b-gray-300 py-6" >

                                {/* Image & Name */}
                                <div className="flex items-center gap-6">
                                    <img src={item.image} alt={item.name} className="w-16 h-18 rounded" />

                                    <div className="w-[40vw] md:w-[50vw] lg:w-[30vw]">
                                        <h3 className="font-medium text-gray-600">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                        <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })} className="text-red-500 text-sm mt-1 cursor-pointer">Remove</button>
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div className="flex items-center justify-center gap-2">
                                    <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })} className="p-1 border rounded cursor-pointer"><FiMinus /></button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })} className="p-1 border rounded cursor-pointer"><FiPlus /></button>
                                </div>

                                {/* Price */}
                                <div className="text-right">
                                    <p className="font-medium">৳{item.new_price}</p>
                                    <p className="text-sm text-gray-500">৳{(item.new_price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}

                        <button onClick={() => navigate("/shop")} className="text-[#F73B71] mt-4 cursor-pointer">← Continue Shopping</button>
                    </div>

                    {/* RIGHT - SUMMARY */}
                    <div className="bg-white p-6 rounded-xl shadow h-fit">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                        <div className="flex justify-between mb-2">
                            <span>Items</span>
                            <span>৳{subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between mb-4">
                            <span>Shipping</span>
                            <span>৳{shipping.toFixed(2)}</span>
                        </div>

                        <div className="flex mb-3">
                            <input
                                type="email"
                                placeholder="Enter promo code"
                                className="w-full p-2 mb-3 bg-gray-100 border rounded-l border-gray-200 shadow text-gray-700  placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#F73B71] focus:ring-2 focus:ring-[#F73B71]/20"
                            />

                            <button className="w-full bg-[#F73B71]/90 text-white rounded-r py-2 mb-3 hover:bg-[#F73B71] transition cursor-pointer">Apply</button>
                        </div>

                        <div className="flex justify-between font-semibold text-lg mb-4 text-gray-500">
                            <span>Total Cost</span>
                            <span>৳{total.toFixed(2)}</span>
                        </div>

                        <button className="w-full bg-indigo-600 text-white py-3 rounded cursor-pointer">Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;