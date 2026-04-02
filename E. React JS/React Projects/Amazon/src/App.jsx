import './App.css'
import Header from './components/Header'
import Inventory from './components/Inventory';
import NoMatch from './components/NoMatch';
import ProductDetails from './components/ProductDetails';
import Review from './components/Review';
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
          <Route path="/product/:productKey" element={<ProductDetails />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>,
    </main>
  )
}

export default App
