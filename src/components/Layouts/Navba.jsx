import React from "react";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navba=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '##FFFFFF' }}>
            <div className="container-fluid">
                {/* Image Logo */}
                <img src="https://s3-alpha-sig.figma.com/img/a010/4578/5698b27c7d3551093a32df774db0abde?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hdA3owXXCene~thZ7RQfQt36uE9~9WWe93gr0q~yEEtUNvWp2Kt6YYp2E3e87DmLPRs0qZNFq-81OWVrt6lJgDnTQ9tFqowAVGUCY0KvNc-NCiKvFGHbSom8~rvKmCnnoqMocQ6SYN7GEEo6CTW3E6P6pHTgwfL-6P9tIiFtYdGkqdPSJqSpBu3O2BZ~LWHSI07tAVBb6xboBsQFnx2R6hDwtucIyzsLubP-SLPTckBonNG1L9h9ZnxV3bDMjN6LgwgxKRVBQgYrFzTC14r3yXJreweCOoKFQH3ekmfrrj4CgIuwHDmbefpxa9xe4RZXxst1FdGUZgypWZZ8kCgLSg__" alt="Logo" className="navbar-brand" style={{ maxWidth: '70px', maxHeight: '70px', marginLeft: "100px", marginTop: "30px" }} />
                <h3 style={{ marginTop: "45px" }}>MusicCart</h3>


                <p style={{ marginTop: "50px", marginLeft: "40px" }}>Home/invoise</p>
                {/* Right Side Menu */}
                <div className="navbar-collapse justify-content-end">
                    <p className="nav-item" style={{ marginRight: "10px" }}>
                        {/* View Cart Button */}
                        <NavLink to="/cart" className="nav-link-link text-white" style={{ color: 'white' }} >
                            <ShoppingCartOutlinedIcon /> viewcart0
                        </NavLink>
                    </p>
                </div>
            </div>
        </nav>
    );
}
export default Navba;