import React, { useState } from "react";
import Layout from "../Layouts/Layouts";
import axios from "axios";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8001/api/v1/auth/login", {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || "/home");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout title="Register - Ecommer App">

            <div className="container" style={{ minHeight: "70vh", marginLeft: "780px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://s3-alpha-sig.figma.com/img/a010/4578/5698b27c7d3551093a32df774db0abde?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hdA3owXXCene~thZ7RQfQt36uE9~9WWe93gr0q~yEEtUNvWp2Kt6YYp2E3e87DmLPRs0qZNFq-81OWVrt6lJgDnTQ9tFqowAVGUCY0KvNc-NCiKvFGHbSom8~rvKmCnnoqMocQ6SYN7GEEo6CTW3E6P6pHTgwfL-6P9tIiFtYdGkqdPSJqSpBu3O2BZ~LWHSI07tAVBb6xboBsQFnx2R6hDwtucIyzsLubP-SLPTckBonNG1L9h9ZnxV3bDMjN6LgwgxKRVBQgYrFzTC14r3yXJreweCOoKFQH3ekmfrrj4CgIuwHDmbefpxa9xe4RZXxst1FdGUZgypWZZ8kCgLSg__"
                        alt="Logo"
                        className="navbar-brand"
                        style={{ maxWidth: '70px', maxHeight: '70px', marginLeft: "100px", marginBottom: "px" }}
                    />
                    <h3 style={{ marginLeft: "20px" }}>MusicCart</h3>
                </div>
                <br></br>


                <div className="card">
                    <h4 style={{ fontSize: "40px" }}>Sign in</h4>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label style={{ fontSize: "20px" }} htmlFor="exampleInputEmail1">Enter your email or mobile number</label>
                            <input
                                type="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-control"
                                id="exampleInputEmail1"
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label style={{ fontSize: "20px" }} htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-control"
                                id="exampleInputPassword1"
                                placeholder="Enter Your Password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Continue
                        </button>
                        <br></br>
                        <h6 style={{ fontSize: "20px" }}>By continuing, you agree to Musicart privacy notice and conditions of use.</h6>
                    </form>
                </div>

                <h6 style={{ marginLeft: "200px", marginBottom: '40px' }}>New to Musicart?</h6>
                <div>
                    <NavLink to="/register" className="bk">Create your Musicart account</NavLink>
                </div>
            </div>


        </Layout>
    );
};

export default Login;
