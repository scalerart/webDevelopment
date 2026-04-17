import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Courses from './components/Courses'
import Footer from './components/Footer'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>,



    </div>
  )
}

export default App



