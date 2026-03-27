import { useState } from "react"
import '../assets/style/Header.css'
import logo from '../assets/images/logo.png'

import { RiShoppingBagLine, RiSearchLine, RiMenuLine, RiCloseLine } from "@remixicon/react";


function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='header'>
            <a href="/" className="logo">
                <img src={logo} alt="" />
            </a>

            <nav className={menuOpen ? "nav active" : "nav"}>
                <div className="search-box">
                    <button className='search-all'>All</button>
                    <input type="text" placeholder='Search Amazon' />
                    <RiSearchLine className='search-icon' />
                </div>

                <div className="nav-link">
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Manage Inventory</a>
                </div>
            </nav>


            <div className="right-section">
                <div id="cart-icon">
                    <RiShoppingBagLine size={33} color='#fff' />
                    <span className="cart-item-count">0</span>
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
        </div>
    )
}

export default Header