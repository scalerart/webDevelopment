import './index.css'

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop';
import LoginPage from './Pages/Auth/LoginPage';
import SignUp from './Pages/Auth/SignUp';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import { CartProvider } from './Context/CartContext';
import ShopContextProvider from './Context/ShopContext';
import ShopCategory from './Pages/Shop/ShopCategory';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/men", element: <ShopCategory banner={men_banner} category='men' /> },
      { path: "/womens", element: <ShopCategory banner={women_banner} category='women' /> },
      { path: "/kids", element: <ShopCategory banner={kids_banner} category='kid' /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/cart", element: <Cart /> },
      { path: "/product/:productId", element: <ProductDetails /> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ShopContextProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </ShopContextProvider>
);
