import '../assets/style/Cart.css'

function Cart({ cart }) {
    const totalPrice = cart.reduce((total, cart) => total + cart.price, 0);

    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    } else if (totalPrice > 15) {
        shipping = 4.99;
    } else if (totalPrice > 0) {
        shipping = 12.99;
    }

    const tax = (totalPrice / 10);
    const grandTotal = (totalPrice + shipping + tax);

    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    };

    return (
        <>
            <h2>Order Summary</h2>
            <p className='items-ordered'>Items Ordered: {cart.length}</p>
            <div className="cart-content">
                <span className='content'>
                    <p>Items: </p>
                    <p>Shipping:</p>
                    <p>Total before Tax:</p>
                    <p>Estimated Tax:</p>
                    <h3>Order Total:</h3>
                </span>
                <span className='price'>
                    <p>{cart.length}</p>
                    <p>${formateNumber(shipping)}</p>
                    <p>${formateNumber(totalPrice)}</p>
                    <p>${formateNumber(tax)}</p>
                    <h3>${formateNumber(grandTotal)}</h3>
                </span>
            </div>
            <button className='review-btn'>Review your order</button>
        </>
    )
}

export default Cart