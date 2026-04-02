import '../assets/style/Cart.css'

function Cart(props) {
    const cart = props.cart;

    const totalQuantity = cart.reduce((total, qty) => total + qty.quantity, 0);

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price * product.quantity;
    }

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
            <p className='items-ordered'>Items Ordered: {totalQuantity}</p>
            <div className="cart-content">
                <span className='content'>
                    <p>Items: </p>
                    <p>Shipping:</p>
                    <p>Total before Tax:</p>
                    <p>Estimated Tax:</p>
                    <h3>Order Total:</h3>
                </span>
                <span className='price'>
                    <p>{totalQuantity}</p>
                    <p>${formateNumber(shipping)}</p>
                    <p>${formateNumber(totalPrice)}</p>
                    <p>${formateNumber(tax)}</p>
                    <h3>${formateNumber(grandTotal)}</h3>
                </span>
            </div>
            {
                props.children
            }
        </>
    )
}

export default Cart