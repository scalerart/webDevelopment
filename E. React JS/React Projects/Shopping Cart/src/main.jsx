import './index.css'

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Cart from './Components/Cart';
import Root from './Layout/Root';
import Products from './Components/Product/Products';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home/> },
      { path: "/product", element: <Products /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
