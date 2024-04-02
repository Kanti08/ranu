import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import "./Header.css"


import { useCart } from "../context/cart";
import { Badge } from "antd";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    };
    return (
        <>
           
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2E0052' }}>
                <div className="container-fluid">
                    <div className="navbar-brand text-center">912121131313</div>
                    <div className="navbar-brand text-center" style={{ width: '1700px' }}>
                        Get 50% off on selected items | Shop Now 
                    </div>
                    <div className="navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/register">Register</a>
                            </li>
                            {/* <Link to="/" className="navbar-brand">
                                🛒 Ecommerce App
                            </Link> */}
                            <li className="nav-item" style={{color:"white"}}>
                                {!auth?.user ? (
                                    <NavLink to="/login" className="nav-link">
                                        Login
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        onClick={handleLogout}
                                        to="/login"
                                        className="nav-link"
                                    >
                                        Logout
                                    </NavLink>
                                )}
                            </li>

                           
                            
                        </ul>
                    </div>
                </div>
            </nav>
            

        </>
    );
};

export default Header;

