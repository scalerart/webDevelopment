function Cart({ cart, setIsOpen, setCart, removeFromCart, increase, decrease }) {
  return (
    <>
      <div>
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-white hover:bg-red-500 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body */}
        <div className="mt-4 overflow-y-auto max-h-[calc(100vh-180px)] space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-100 text-gray-400 rounded-full text-2xl">
                🛒
              </div>
              <p className="text-lg font-medium text-gray-600">Your Cart is empty...</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors cursor-pointer shadow-md"
              >
                Let's Shop
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((product) => (
                <div className="flex items-center justify-between bg-white p-3 my-3 rounded-xl shadow-xs hover:shadow-sm transition-all">
                  <p className="w-20 h-20 bg-gray-400 rounded-xl flex items-center justify-center">
                    Image
                  </p>
                  <h2 className="text-start">{product.title}</h2>
                  <h2>${product.price}</h2>
                  <p
                    onClick={() => decrease(product.id)}
                    className="w-6 h-6 bg-gray-300 flex items-center justify-center text-xl cursor-pointer rounded-sm"
                  >
                    -
                  </p>
                  <p
                    onClick={() => increase(product.id)}
                    className="w-6 h-6 bg-gray-300 flex items-center justify-center text-xl cursor-pointer rounded-sm"
                  >
                    +
                  </p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-white font-semibold w-6 h-6 rounded-full flex items-center justify-center bg-red-400 hover:bg-red-500 transition-all duration-300 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Drawer Footer / Checkout */}
      {cart.length > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={() => {
              alert('Purchase successful!');
              setCart([]);
              setIsOpen(false);
            }}
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-all active:scale-98 cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      )}
    </>
  );
}

export default Cart;
