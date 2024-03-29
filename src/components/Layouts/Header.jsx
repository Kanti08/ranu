

import React from "react";
import "./Header.css";
import { Link, NavLink } from 'react-router-dom'; // Import Link component
import Logout from "../Register/Logout"
import { useCart } from "../context/cart";

const Header = () => {
    const { cart } = useCart(); // Access the cart from the useCart hook

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2E0052' }}>
                <div className="container-fluid">
                    <div className="navbar-brand text-center">912121131313</div>
                    <div className="navbar-brand text-center" style={{ width: '1700px' }}>
                        Get 50% off on selected items | Shop Now
                    </div>
                    <div className="navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/register">Signup</a>
                            </li>
                            <li className="nav-item">
                                <Logout />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link text-white">
                                    Cart ({cart ? cart.length : 0})
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
