import React from "react";

import { Box } from '@mui/material';
import { useAuth } from "../context/auth";
import imageSrc from "../../images/dabb327ce88f9fcc7f707d7d08943724.png"
import Layouts from "../Layouts/Layouts";
import FilterPage from "../../pages/FilterPage"
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/cart";
import Url from "../Home/url"
import "../Layouts/Header.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';







const Home = () => {
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
        <div>
            <Layouts>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '##FFFFFF' }}>
                    <div className="container-fluid">
                        {/* Image Logo */}
                        <img src="https://s3-alpha-sig.figma.com/img/a010/4578/5698b27c7d3551093a32df774db0abde?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hdA3owXXCene~thZ7RQfQt36uE9~9WWe93gr0q~yEEtUNvWp2Kt6YYp2E3e87DmLPRs0qZNFq-81OWVrt6lJgDnTQ9tFqowAVGUCY0KvNc-NCiKvFGHbSom8~rvKmCnnoqMocQ6SYN7GEEo6CTW3E6P6pHTgwfL-6P9tIiFtYdGkqdPSJqSpBu3O2BZ~LWHSI07tAVBb6xboBsQFnx2R6hDwtucIyzsLubP-SLPTckBonNG1L9h9ZnxV3bDMjN6LgwgxKRVBQgYrFzTC14r3yXJreweCOoKFQH3ekmfrrj4CgIuwHDmbefpxa9xe4RZXxst1FdGUZgypWZZ8kCgLSg__" alt="Logo" className="navbar-brand" style={{ maxWidth: '70px', maxHeight: '70px' ,marginLeft:"100px",marginTop:"30px"}} />
                          <h3 style={{marginTop:"45px"}}>MusicCart</h3>
                       
                        <NavLink to="/invoice"   style={{marginLeft:"20px",marginTop:"40px", color:"black"}} >
                         invoice
                        </NavLink>
                        {/* Right Side Menu */}
                        <div className="navbar-collapse justify-content-end">
                            <ul className="navbar-nav">

                                <li className="nav-item" style={{marginRight:"10px"}}>
                                    {/* View Cart Button */}
                                    <NavLink to="/cart" className="nav-link-link text-white" style={{ color: 'white' }} >
                                        <ShoppingCartOutlinedIcon/> viewcart0
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* Check if user is logged in */}
                                    {!auth?.user ? (
                                        <NavLink to="/login" className="nav-link">
                                            Login
                                        </NavLink>
                                    ) : (
                                        <li className="nav-item" style={{marginRight:"110px" , marginTop:"15px"}}>
                                            {/* Display user's name within a circle */}
                                            <div className="nav-link rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '50px', height: '50px', backgroundColor: 'white', border: '2px solid black', color: '#2E0052', fontSize: '25px' }} id="userCircle" onClick={() => document.getElementById("userDropdown").classList.toggle("show")}>
                                                {auth?.user?.name.slice(0, 2).toUpperCase()}
                                                <div class="dropdown-menu" id="userDropdown" style={{ top: '50px' }}>
                                                    <a class="dropdown-item" href="#">{auth?.user?.name}</a>
                                                    <a class="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
                                                </div>
                                            </div>


                                        </li>
                                    )}
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
               
                <div>
                    <Box
                        sx={{
                            top: '90px', 
                            left: '5%', 
                            right: '5%', 
                            maxWidth: '1860px',
                           
                            background: 'linear-gradient(90deg, #7286B4 0%, #E794CE 100%)',
                            color: 'white',
                            height: "300px",
                           
                            borderRadius: '10px', 
                            zIndex: 999,
                            margin: 'auto', 
                            marginTop: '50px',
                        }}
                        style={{
                            '@media (max-width: 912px)': { // Media query for screens up to 768px width (typical mobile screens)
                                height: 'auto',
                                flexDirection: 'column',
                                padding: '20px',
                            },
                        }}
                    >
                        <div style={{ float: 'left', width: '50%' }}> 
                            <h1 style={{ color: "#2E0052", marginLeft: '40px', textAlign: 'center',padding:'80px',fontSize:'70px'}}> Grab upto 50% off on Selected headphones</h1>
                        </div>
                        <div style={{ float: 'right', width: '50%' }}>
                            <img
                                src={imageSrc}
                                alt="Example"
                                style={{
                                    height: '410px',
                                    float: 'right', 
                                    width:'500px',
                                    paddingBottom: '70px',
                                    marginTop: '-45px'
                                    
                                }}
                            />
                        </div>
                    </Box>
                </div>



            <FilterPage/>
           

            </Layouts>







        </div>

    );
}
export default Home;