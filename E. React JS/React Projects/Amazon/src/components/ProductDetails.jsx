import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router";
import fakeData from "../fakeData";
import { RiShoppingBagLine } from "@remixicon/react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";
import { addToDb } from "../utilities/databaseManager";
import { UserContext } from "../context/ContextProvider";
import Product from "./Product";

const ProductDetails = ({ addProdCart }) => {
    const { productKey } = useParams();
    const navigate = useNavigate();
    const { user, setItem } = useContext(UserContext);

    const product = fakeData.find((p) => p.key === productKey);

    const [selectedSize, setSelectedSize] = useState("M");
    const sizes = ["XS", "S", "M", "L", "XL"];

    if (!product) {
        return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
    }

    const { img, name, price, stock, seller, features } = product;

    const handleAddToCart = () => {
        if (!user) {
            alert("Please login first");
            return;
        }
        addToDb(product.key, 1);
        addProdCart && addProdCart(product);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl">

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-between">

                {/* IMAGE */}
                <div className="grid gap-6 items-center justify-center">
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden p-6 m-auto">
                        <img
                            src={img}
                            className="w-80 object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* THUMBNAILS */}
                    <div className="flex justify-between gap-2 sm:gap-5">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={img}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover border border-gray-200 overflow-hidden cursor-pointer flex-shrink-0 hover:scale-105 transition"
                            />
                        ))}
                    </div>
                </div>

                {/* DETAILS */}
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">

                    <p className="text-xs sm:text-sm text-gray-400 uppercase mb-2 tracking-wide">{seller}</p>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 line-clamp-3">{name}</h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                        <div className="flex text-yellow-400 text-sm sm:text-base">
                            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                        </div>
                        <span className="text-gray-500 text-xs sm:text-sm">4.5 • 120 Reviews</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl sm:text-3xl font-bold text-orange-500">${price}</span>
                        <span className="line-through text-gray-400 text-sm sm:text-lg">${(price + 200).toFixed(2)}</span>
                    </div>

                    {/* Stock */}
                    <p className="text-red-500 text-xs sm:text-sm mb-4">Only {stock} left</p>

                    {/* SIZE */}
                    <div className="mb-5">
                        <p className="font-medium mb-2 text-sm sm:text-base">Size</p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-10 h-10 text-sm rounded-full border border-gray-300 transition cursor-pointer ${selectedSize === size
                                        ? "bg-orange-500 text-white"
                                        : "hover:bg-gray-100"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* FEATURES */}
                    {features?.length > 0 && (
                        <ul className="text-xs sm:text-sm text-gray-600 mb-5 space-y-1">
                            {features.map((f, i) => (
                                <li key={i}>• {f.description}: {f.value}</li>
                            ))}
                        </ul>
                    )}

                    {/* BUTTONS */}
                    <div className="space-y-3">

                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-orange-500 text-white py-2.5 sm:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition cursor-pointer"
                        >
                            <RiShoppingBagLine />
                            Add to Cart
                        </button>

                        <button className="w-full border py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                            Buy Now
                        </button>

                        {/* ICONS */}
                        <div className="flex justify-center gap-5 text-gray-500 text-lg sm:text-xl pt-2">
                            <FaHeart className="cursor-pointer hover:text-red-500" />
                            <FaShareAlt className="cursor-pointer hover:text-blue-500" />
                        </div>

                        <button
                            onClick={() => navigate("/shop")}
                            className="block text-center text-orange-500 mt-3 text-sm hover:underline"
                        >
                            ← Continue Shopping
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-center text-2xl font-bold mt-8 pb-2 text-gray-600">RELATED PRODUCTS</h2>
                <hr className="w-58 h-1 m-auto bg-[#F54A00] border-0 mb-8" />
                <div className='my-5'>
                    <div className='grid justify-between items-center gap-4 sm:gap-5 md:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5'>
                        {
                            fakeData
                                .sort((a, b) => b.rating - a.rating)
                                .slice(0, 10)
                                .map(product =>
                                    <Product
                                        key={product.key}
                                        showAddToCart={true}
                                        removeCart={false}
                                        showQuantity={false}
                                        showStock={true}
                                        showDetails={true}
                                        addProdCart={addProdCart}
                                        features={false}
                                        product={product}
                                    />
                                )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;