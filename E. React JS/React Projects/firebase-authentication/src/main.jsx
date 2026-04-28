import './index.css'

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import RegistrationForm from './Auth/RegistrationForm';
import LoginForm from './Auth/LoginForm';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ServicesSection from './Components/ServicesSection';
import ContactSection from './Components/ContactSection';
import ContextProvider from './Context/ContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HeroSection /> },
      { path: "/about", element: <AboutSection /> },
      { path: "/service", element: <ServicesSection /> },
      { path: "/contact", element: <ContactSection /> },
      { path: "/register", element: <RegistrationForm /> },
      { path: "/login", element: <LoginForm /> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ContextProvider>
    <RouterProvider router={router} />,
  </ContextProvider>
);
