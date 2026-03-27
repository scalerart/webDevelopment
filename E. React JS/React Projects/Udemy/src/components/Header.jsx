import '../assets/css/Header.css'
import logo from '../assets/images/logo.png'
import { RiShoppingBagLine, RiSearchLine, RiMenuLine, RiCloseLine } from "@remixicon/react";

function Header() {
  return (
    <header>
      <nav>
        <RiMenuLine size={20} />
        <a href="#" className='logo'><img src={logo} alt="" /></a>
        <div className="cart-search">
          <RiSearchLine size={20} cursor={'pointer'} />
          <RiShoppingBagLine size={20} cursor={'pointer'} />
        </div>
      </nav>

      {/* desktop menu */}
      <div className='desktop-menu'>

        <a href="#" className='logo'><img src={logo} alt="" /></a>
        <a href="#"><span>Find Courses</span></a>
        <a href="#"><span className='get-certified'>Get Certified</span></a>
        <a href="#"><span className='subscribe'>Subscribe</span></a>

        <div className="search-box">
          <RiSearchLine className='search-icon' cursor={'pointer'} />
          <input type="text" placeholder='Search for anything' />
        </div>
        <a href="#"><span className='udemy-business'>Udemy Business</span></a>

        <div className="login-signup">
          <RiShoppingBagLine size={25} cursor={'pointer'} />
          <button className="logIn">Log in</button>
          <button className="logOut">Sign up</button>
        </div>

      </div>
    </header>
  )
}

export default Header