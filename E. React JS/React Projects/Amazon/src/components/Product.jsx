import React from "react";
import { RiShoppingBagLine } from "@remixicon/react";
import { Link } from "react-router";

function Product({
    product,
    addProdCart,
    showAddToCart,
    removeProduct,
    removeCart,
    showQuantity,
    showStock,
    showDetails,
    features
}) {
    const {
        img,
        name,
        price,
        stock,
        seller,
        key,
        quantity,
    } = product;

    return (
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">

            {/* Image Section */}
            <div className="relative w-full h-52 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition duration-300"
                />

                {/* Badge */}
                {showStock && (
                    <span className="absolute top-4 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        {stock} left
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2 flex-grow">

                {/* Title */}
                <h4 className="text-base font-semibold text-gray-800 line-clamp-2">
                    <Link
                        to={showDetails ? `/product/${key}` : "#"}
                        className="hover:text-orange-500 transition"
                    >
                        {name}
                    </Link>
                </h4>

                {/* Seller */}
                <p className="text-xs text-gray-500">
                    Sold by <span className="font-medium">{seller}</span>
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mt-1">
                    <h3 className="text-xl font-bold text-orange-500">
                        ${price}
                    </h3>

                    {showQuantity && (
                        <span className="text-sm text-gray-600">
                            Qty: {quantity}
                        </span>
                    )}
                </div>

                {/* Features */}
                {features && features?.length > 0 && (
                    <ul className="text-xs text-gray-600 space-y-1 mt-2">
                        {features.slice(0, 2).map((feature, i) => (
                            <li key={i} className="flex gap-1">
                                <span className="text-gray-400">•</span>
                                {feature.description}:{" "}
                                <span className="font-medium">
                                    {feature.value}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Buttons */}
                <div className="mt-auto pt-4 space-y-2">

                    {showAddToCart && (
                        <button
                            onClick={() => addProdCart(product)}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 rounded-xl transition font-medium shadow-md hover:shadow-lg cursor-pointer"
                        >
                            <RiShoppingBagLine />
                            Add to Cart
                        </button>
                    )}

                    {removeCart && (
                        <button
                            onClick={() => removeProduct(product.key)}
                            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl transition font-medium cursor-pointer"
                        >
                            <RiShoppingBagLine />
                            Remove
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;