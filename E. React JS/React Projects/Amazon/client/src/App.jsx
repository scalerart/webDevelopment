// import './App.css'
import LoginForm from './auth/LoginForm';
import ProtectedRoute from './auth/ProtectedRoute';
import RegisterForm from './auth/RegisterForm';
import Header from './components/Header'
import Inventory from './components/Inventory';
import NoMatch from './components/NoMatch';
import ProductDetails from './components/ProductDetails';
import Review from './components/Review';
import Shipment from './components/Shipment';
import Shop from './components/Shop'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="shop" element={<Shop />} />
          <Route path="review" element={<Review />} />
          <Route path="cart" element={<Review />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="/product/:productKey" element={<ProductDetails />} />
          <Route path="*" element={<NoMatch />} />

          <Route
            path="shipment"
            element={
              <ProtectedRoute>
                <Shipment />
              </ProtectedRoute>
            } />

          <Route
            path="inventory"
            element={
              <ProtectedRoute>
                <Inventory />
              </ProtectedRoute>
            } />

          
        </Routes>
      </BrowserRouter>,
    </main>
  )
}

export default App
