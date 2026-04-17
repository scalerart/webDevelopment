import { useContext } from 'react';
import '../assets/css/Header.css'
import logo from '../assets/images/logo.png'
import { RiShoppingBagLine, RiSearchLine, RiMenuLine } from "@remixicon/react";
import { CartContext } from '../Context/ContextProvider';
import { Link } from 'react-router';

function Header() {
  const { cart } = useContext(CartContext)

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav>
        <RiMenuLine size={20} />
        <Link to='/'>
          <span className='logo'><img src={logo} alt="" /></span>
        </Link>
        <div className="cart-search">
          <RiSearchLine size={20} cursor={'pointer'} />

          <Link to='/cart'>
            <span className='cart-count'>
              <RiShoppingBagLine className='cart' size={25} cursor={'pointer'} />
              <span className='count'>{totalItems}</span>
            </span>
          </Link>
        </div>
      </nav>

      {/* desktop menu */}
      <div className='desktop-menu'>

        <Link to='/'>
          <span className='logo'><img src={logo} alt="" /></span>
        </Link>
        <a href="#"><span>Find Courses</span></a>
        <a href="#"><span className='get-certified'>Get Certified</span></a>
        <a href="#"><span className='subscribe'>Subscribe</span></a>

        <div className="search-box">
          <RiSearchLine className='search-icon' cursor={'pointer'} />
          <input type="text" placeholder='Search for anything' />
        </div>
        <a href="#"><span className='udemy-business'>Udemy Business</span></a>

        <div className="login-signup">
          <Link to='/cart'>
            <span className='cart-count'>
              <RiShoppingBagLine className='cart' size={25} cursor={'pointer'} />
              <span className='count'>{cart.length}</span>
            </span>
          </Link>
          <button className="logIn">Log in</button>
          <button className="logOut">Sign up</button>
        </div>

      </div>
    </header>
  )
}

export default Header