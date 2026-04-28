import { useContext, useState } from "react";
import { FaBars, FaRegUserCircle, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { UserContext } from "../Context/ContextProvider";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { user, logOut } = useContext(UserContext);

    // Sign Out
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <header className="bg-white shadow-md sticky w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to='/'><h1 className="text-2xl font-bold text-indigo-600">Auth.</h1></Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <NavLink to='/' className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>Home</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>About</NavLink>
                    <NavLink to='/service' className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>Services</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>Contact</NavLink>
                </nav>

                {
                    user && <div className="flex items-center gap-2">
                        <div>
                            <p className="text-right">{user.displayName}</p>
                            {/* <p className="text-right">{user.email}</p> */}
                        </div>

                        {user.photoURL ? <img className="w-10 h-10 border border-gray-300 rounded-full" src={user.photoURL} alt="" /> : <FaRegUserCircle size={25} />}
                    </div>
                }

                {/* Buttons */}
                {
                    !user ?
                        <div className="hidden md:flex flex-col gap-3 pt-4">
                            <Link to={'/login'}>
                                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer">Sign In</button>
                            </Link>
                        </div> :
                        <Link>
                            <button onClick={handleSignOut} className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer">Sign Out</button>
                        </Link>
                }


                {/* Mobile Menu Icon */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
                    <nav className="flex flex-col gap-4 text-gray-700 font-medium">
                        <NavLink to='/' className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>About</NavLink>
                        <NavLink to='/service' className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>Services</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>Contact</NavLink>
                    </nav>

                    {
                        !user ?
                            <div className="flex flex-col gap-3 pt-4">
                                <Link to={'/login'}>
                                    <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer">Sign In</button>
                                </Link>
                            </div> :
                            <Link>
                                <button onClick={handleSignOut} className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer">Sign Out</button>
                            </Link>
                    }
                </div>
            )}
        </header>
    );
}
