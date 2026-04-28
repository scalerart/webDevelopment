import { useContext, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import {
    RiShoppingBagLine,
    RiSearchLine,
    RiMenuLine,
    RiCloseLine,
} from "@remixicon/react";
import { UserContext } from "../context/ContextProvider";
import { FaRegUserCircle } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logOut, item } = useContext(UserContext);

    const handleSignOut = () => {
        logOut().then().catch();
        setMenuOpen(false);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-xl text-white border-b border-white/10">

            {/* Navbar */}
            <div className="flex items-center justify-between px-4 md:px-8 py-4">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[90px] md:w-[120px]"
                    />
                </Link>

                {/* Nav */}
                <nav className="hidden lg:flex items-center gap-6">

                    {/* Search */}
                    <div className="flex items-center bg-white rounded overflow-hidden shadow-md">
                        <button className="px-3 py-2 text-black bg-gray-200 text-sm">All</button>

                        <input
                            type="text"
                            placeholder="Search products..."
                            className="px-3 py-2 outline-none text-black w-[260px]"
                        />

                        <RiSearchLine className="text-black mx-3" />
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-5 text-sm font-medium">
                        <NavLink to="/shop" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-300 transition"} > Shop </NavLink>
                        <NavLink to="/review" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-300 transition"} > Orders </NavLink>
                        <NavLink to="/inventory" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-300 transition"} > Inventory </NavLink>
                    </div>
                </nav>

                {/* Right */}
                <div className="flex items-center gap-4">

                    {/* Cart */}
                    <Link to="/cart" className="relative hover:scale-110 transition">
                        <RiShoppingBagLine size={26} />
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {item}
                        </span>
                    </Link>

                    {/* User */}
                    {user && (
                        <div className="hidden md:flex items-center gap-2 px-2 py-1 bg-gray-700 rounded">
                            {user.photoURL ? (
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={user.photoURL}
                                    alt=""
                                />
                            ) : (
                                <FaRegUserCircle size={22} />
                            )}
                            <p className="text-sm">{user.displayName}</p>
                        </div>
                    )}

                    {/* Login / Logout */}
                    {!user ? (
                        <Link to="/login">
                            <button className="hidden md:block bg-orange-500 px-4 py-1.5 rounded hover:scale-110 transition cursor-pointer">
                                Login
                            </button>
                        </Link>
                    ) : (
                        <button
                            onClick={handleSignOut}
                            className="hidden md:block bg-white text-black px-4 py-1.5 rounded hover:scale-110 transition cursor-pointer"
                        >
                            Logout
                        </button>
                    )}

                    {/* Mobile Button */}
                    <button
                        className="lg:hidden cursor-pointer"
                        onClick={() => setMenuOpen(true)}
                    >
                        <RiMenuLine size={28} />
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {/* <div
                className={`fixed inset-0 bg-black/50 z-40 transition ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={handleCloseMenu}
            /> */}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-screen w-screen bg-black z-50 transform transition duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="px-4 md:px-8">
                    <div className="bg-black flex justify-between items-center py-4">
                        {/* LOGO */}
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                alt="logo"
                                className="w-[90px] md:w-[120px]"
                            />
                        </Link>
                        <button onClick={handleCloseMenu}>
                            <RiCloseLine size={30} cursor={"pointer"} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="py-4 space-y-5">

                        {/* Search */}
                        <div className="flex items-center bg-white rounded overflow-hidden shadow-md">
                            <button className="px-3 py-2 text-black bg-gray-200 text-sm">All</button>

                            <input
                                type="text"
                                placeholder="Search products..."
                                className="px-3 py-2 w-full outline-none text-black"
                            />

                            <RiSearchLine className="text-black mx-3" />
                        </div>

                        {/* Link */}
                        <div className="flex flex-col gap-4 text-lg font-medium">
                            <NavLink onClick={handleCloseMenu} to="/shop" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-300 transition"} > Shop </NavLink>
                            <NavLink onClick={handleCloseMenu} to="/review" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-300 transition"} > Orders </NavLink>
                            <NavLink onClick={handleCloseMenu} to="/inventory" className={({ isActive }) => isActive ? "text-orange-400" : "hover:text-orange-300 transition"} > Inventory </NavLink>
                        </div>

                        {/* User */}
                        {user && (
                            <div className="flex items-center gap-2 px-2 py-2 bg-gray-700 rounded">
                                {user.photoURL ? (
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={user.photoURL}
                                        alt=""
                                    />
                                ) : (
                                    <FaRegUserCircle size={22} />
                                )}
                                <p className="text-sm">{user.displayName}</p>
                            </div>
                        )}

                        {/* BUTTON */}
                        {!user ? (
                            <Link to="/login" onClick={handleCloseMenu}>
                                <button className="bg-orange-500 w-full py-3 rounded cursor-pointer">
                                    Login
                                </button>
                            </Link>
                        ) : (
                            <button
                                onClick={handleSignOut}
                                className="bg-white text-black w-full py-3 rounded cursor-pointer"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;