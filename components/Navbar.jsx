import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbar fixed top-0 left-0 bg-black text-white flex justify-between px-5 py-3 z-5 w-full mb-15">
                <div>
                    <a className="btn btn-ghost normal-case text-xl">MyApp</a>
                </div>
                <div>
                    <ul className="menu menu-horizontal p-0 list-none flex gap-6">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
