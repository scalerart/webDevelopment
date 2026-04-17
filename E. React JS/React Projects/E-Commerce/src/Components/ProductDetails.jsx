import { useContext, useState } from "react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { useCart } from "../Context/CartContext";
import { ShopContext } from "../Context/ShopContext";
import Product from "./Product";

export default function ProductDetails() {
    const { all_product } = useContext(ShopContext);
    const navigate = useNavigate();

    const [selectedSize, setSelectedSize] = useState("M");
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];


    const { productId } = useParams();
    const findProduct = all_product.find(item => item.id == productId);

    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: findProduct,
        })
    }

    return (
        <section className='container m-auto px-5 my-8'>
            <div className="flex flex-col gap-8 items-center lg:flex-row">

                {/* LEFT - Image Section */}
                <div className="flex flex-col-reverse sm:flex-row gap-4 justify-center">
                    <div className="flex flex-row sm:flex-col justify-between overflow-hidden">
                        {
                            [1, 2, 3, 4].map(img =>
                                <img
                                    key={img}
                                    src={findProduct?.image}
                                    className="w-22 h-22 object-cover border border-gray-200 hover:scale-105 transition cursor-pointer"
                                />
                            )
                        }
                    </div>

                    <div className=" border-gray-200 overflow-hidden ">
                        <img
                            src={findProduct?.image}
                            className="object-cover shadow-md hover:scale-102 transition"
                        />
                    </div>
                </div>

                {/* RIGHT - Details */}
                <div className="flex flex-col justify-between px-3 sm:px-6 md:px-0">

                    <div>
                        <p className="text-sm text-gray-400 mb-2 tracking-wide">PREMIUM BLAZER</p>
                        <h1 className="text-3xl text-gray-600 font-semibold mb-1 sm:mb-3 leading-snug">{findProduct?.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-2 sm:mb-5">
                            <div className="flex text-yellow-400 text-sm">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <span className="text-gray-500 text-sm">4.8 • 350 Reviews</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4 mb-2 sm:mb-4">
                            <span className="text-3xl font-bold text-gray-500">৳{findProduct?.new_price}</span>
                            <span className="line-through text-gray-400">৳{findProduct?.old_price}</span>
                            <span className="text-green-600 text-sm font-medium">Save 6%</span>
                        </div>

                        {/* Size */}
                        <div className="mb-5">
                            <p className="font-medium mb-2 sm:mb-3">Size</p>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-10 h-10 rounded-full text-sm border border-gray-300 transition-all cursor-pointer hover:text-[#F73B71] hover:border-[#F73B71] ${selectedSize === size
                                            ? "bg-[#F73B71] text-white shadow-md"
                                            : "hover:bg-gray-100"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div>
                        <div className="flex gap-4 mb-5">
                            <button onClick={handleAddToCart} className="flex-1 bg-[#F73B71] text-white py-3 font-medium hover:opacity-90 transition cursor-pointer">Add to Cart</button>
                            <button className="flex-1 border py-3 font-medium hover:bg-gray-100 transition cursor-pointer">Buy Now </button>
                        </div>

                        {/* Icons */}
                        <div className="flex gap-5 text-gray-500">
                            <FaHeart className="cursor-pointer hover:text-[#F73B71] transition" />
                            <FaShareAlt className="cursor-pointer hover:text-[#F73B71] transition" />
                        </div>

                        <button onClick={() => navigate("/shop")} className="text-[#F73B71] mt-4 cursor-pointer"> ← Continue Shopping</button>
                    </div>
                </div>
            </div>

            <div className="my-10">
                <div className="flex items-center text-gray-500 border-collaps">
                    <span className="py-3 px-8 border border-gray-300 border-collapse">Description</span>
                    <span className="py-3 px-8 border border-gray-300 border-collapse">Reviews (122)</span>
                </div>
                <div className="border border-gray-300 py-5 px-8 border-collapse">
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis rem distinctio a, voluptates tempora sed dignissimos accusamus fuga quibusdam iure error dicta est quos nesciunt optio illo repellendus. Dignissimos esse doloremque ducimus, delectus dolore ea quis? Magnam, itaque. Commodi, temporibus nostrum. Voluptatum aperiam ipsam laboriosam inventore vero dicta eos?</p>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi officia ab saepe doloribus? Consequuntur, recusandae perspiciatis dolor suscipit porro, quibusdam exercitationem impedit ex, doloribus asperiores quisquam non id sequi ad hic nemo at enim eveniet dicta illum voluptate! Hic.</p>
                </div>
            </div>

            <div>
                <h2 className="text-center text-2xl font-bold my-8 text-gray-600">RELATED PRODUCTS</h2>
                <div className='my-5'>
                    <div className='grid justify-between items-center gap-4 sm:5 md:6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5'>
                        {
                            all_product
                                .sort((a, b) => b.rating - a.rating)
                                .slice(0, 5)
                                .map(product =>
                                    <Product
                                        key={product.id}
                                        product={product}
                                    />
                                )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}