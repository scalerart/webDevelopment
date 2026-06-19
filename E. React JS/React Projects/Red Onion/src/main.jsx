import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import ProductContextProvider from './Context/ProductsContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cart", element: <h1>Cart</h1> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ProductContextProvider>
    <RouterProvider router={router} />,
  </ProductContextProvider>
);
