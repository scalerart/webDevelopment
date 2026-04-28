import { useContext } from "react";
import { UserContext } from "../context/ContextProvider";

function Cart({ cart, children }) {
    const {cartItem} = useContext(UserContext);

    // Total Quantity
    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartItem(totalQuantity);


    // Total Price
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Shipping
    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    } else if (totalPrice > 15) {
        shipping = 4.99;
    } else if (totalPrice > 0) {
        shipping = 12.99;
    }

    // Tax & Grand Total
    const tax = totalPrice * 0.1;
    const grandTotal = totalPrice + shipping + tax;

    const format = (num) => num.toFixed(2);

    return (
        <div className="bg-white rounded-2xl p-3 space-y-4">

            {/* Title */}
            <h2 className="text-xl font-semibold border-b pb-2 text-center">
                Order Summary
            </h2>

            {/* Items */}
            <p className="text-gray-600 text-sm text-center">
                Items Ordered:{" "}
                <span className="font-medium">{totalQuantity}</span>
            </p>

            {/* Price Breakdown */}
            <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                    <span>Items</span>
                    <span>{totalQuantity}</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${format(shipping)}</span>
                </div>

                <div className="flex justify-between">
                    <span>Total before Tax</span>
                    <span>${format(totalPrice)}</span>
                </div>

                <div className="flex justify-between">
                    <span>Estimated Tax</span>
                    <span>${format(tax)}</span>
                </div>

                <hr />

                <div className="flex justify-between text-lg font-bold text-orange-500">
                    <span>Order Total</span>
                    <span>${format(grandTotal)}</span>
                </div>
            </div>

            {/* CTA Button / Extra Content */}
            <div className="pt-2">
                {children}
            </div>
        </div>
    );
}

export default Cart;