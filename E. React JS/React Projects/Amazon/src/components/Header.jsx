import { useState } from "react"
import '../assets/style/Header.css'
import logo from '../assets/images/logo.png'
import { Link, NavLink } from "react-router";

import { RiShoppingBagLine, RiSearchLine, RiMenuLine, RiCloseLine } from "@remixicon/react";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <header>
            <Link to="/" className="logo"><img src={logo} alt="" /></Link>

            <nav className={menuOpen ? "nav active" : "nav"}>
                <div className="search-box">
                    <button className='search-all'>All</button>
                    <input type="text" placeholder='Search Amazon' />
                    <RiSearchLine className='search-icon' />
                </div>

                <div className="nav-link">
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/shop">Shop</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/review">Order Review</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/inventory">Manage Inventory</NavLink>
                </div>
            </nav>


            <div className="right-section">
                <div id="cart-icon">
                    <Link to="/cart"><RiShoppingBagLine size={33} color='#fff' /></Link>
                    {/* <span className="cart-item-count">0</span> */}
                </div>

                <div
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {
                        menuOpen
                            ? <RiCloseLine size={30} color="#fff" />
                            : <RiMenuLine size={30} color="#fff" />
                    }
                </div>
            </div>

        </header >
    )
}

export default Header