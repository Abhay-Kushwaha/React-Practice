import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                        MyApp
                    </span>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex menu-horizontal gap-8 text-lg font-medium">
                    <li>
                        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                    </li>
                    <li>
                        <Link to="/toggler" className="hover:text-yellow-400 transition">Toggler</Link>
                    </li>
                </ul>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-1 w-6 rounded bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block h-1 w-6 rounded bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block h-1 w-6 rounded bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-black bg-opacity-95 w-full absolute left-0 top-full transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
                    <li>
                        <Link to="/" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/toggler" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Toggler</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar
