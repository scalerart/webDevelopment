import { useState } from 'react';
import Cart from './components/Cart';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    title: 'Redmi note 14',
    price: 23000,
  },
  {
    id: 2,
    title: 'Apple 14 Pro Max',
    price: 56000,
  },
  {
    id: 3,
    title: 'Samsung',
    price: 21000,
  },
  {
    id: 4,
    title: 'Infinix',
    price: 25000,
  },
  {
    id: 5,
    title: 'Redmi note 14',
    price: 23000,
  },
  {
    id: 6,
    title: 'Apple 14 Pro Max',
    price: 56000,
  },
  {
    id: 7,
    title: 'Samsung',
    price: 21000,
  },
  {
    id: 8,
    title: 'Infinix',
    price: 25000,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const increase = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const currentQty = item.quantity || 1;
          return { ...item, quantity: currentQty + 1 };
        }
        return item;
      })
    );
  };

  const decrease = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const currentQty = item.quantity || 1;
            return { ...item, quantity: currentQty - 1 };
          }
          return item;
        })
        .filter((item) => (item.quantity ?? 1) > 0)
    );
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto relative">
      <div className="sticky top-0 left-0 z-50 bg-white shadow-sm ">
        <div className="flex items-center justify-between mb-5 p-5">
          <p className="text-xl font-semibold">Products List</p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-1 flex items-center justify-between gap-3 rounded-full text-white bg-orange-500 hover:bg-orange-600 cursor-pointer transition-all"
          >
            CART
            {cart.length > 0 && (
              <p className="w-6 h-6 bg-white text-orange-500 flex items-center justify-center rounded-full">
                {cart.length}
              </p>
            )}
          </button>
        </div>
      </div>

      <ProductCard products={products} cart={cart} setIsOpen={setIsOpen} addToCart={addToCart} />

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute top-0 left-0 w-full h-full bg-black/20 z-50 cursor-pointer"
        ></div>
      )}

      {/* Sidebar Cart Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 w-80 sm:w-96 h-full bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Cart
          cart={cart}
          setIsOpen={setIsOpen}
          setCart={setCart}
          removeFromCart={removeFromCart}
          increase={increase}
          decrease={decrease}
        />
      </aside>
    </div>
  );
}

export default App;
