import React, { useState } from "react";
import Layout from "../Layouts/Layouts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
import "./login.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8001/api/v1/auth/register", {
                name,
                email,
                password,
                mobile,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    // Function to handle navigation to login page
    const navigateToLogin = () => {
        navigate("/login");
    };

    return (
        <Layout>
            <div className="container " style={{ marginLeft: "450px", height: "780px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/a010/4578/5698b27c7d3551093a32df774db0abde?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hdA3owXXCene~thZ7RQfQt36uE9~9WWe93gr0q~yEEtUNvWp2Kt6YYp2E3e87DmLPRs0qZNFq-81OWVrt6lJgDnTQ9tFqowAVGUCY0KvNc-NCiKvFGHbSom8~rvKmCnnoqMocQ6SYN7GEEo6CTW3E6P6pHTgwfL-6P9tIiFtYdGkqdPSJqSpBu3O2BZ~LWHSI07tAVBb6xboBsQFnx2R6hDwtucIyzsLubP-SLPTckBonNG1L9h9ZnxV3bDMjN6LgwgxKRVBQgYrFzTC14r3yXJreweCOoKFQH3ekmfrrj4CgIuwHDmbefpxa9xe4RZXxst1FdGUZgypWZZ8kCgLSg__"
                        alt="Logo"
                        className="navbar-brand"
                        style={{ maxWidth: '70px', maxHeight: '70px', marginLeft: "290px" }}
                    />
                    <h3 style={{ marginLeft: "20px" }}>MusicCart</h3>
                </div>
                <div className="card p-6" style={{ marginLeft: "190px", height: "590px" }}>
                    <h3>Create Account</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Your name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder="Enter Your Name"
                                required
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Email Id</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="Enter Your Email "
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter Your Password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label>Mobile number</label>
                            <input
                                type="text"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="form-control"
                                placeholder="Enter Your Phone"
                                style={{ width: "100%" }} // Adjust the width as needed
                                required
                            />
                        </div>
                        <p style={{ fontWeight: "bold" }}>
                            By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.
                        </p>
                        <button type="submit" className="btn btn-primary">
                            REGISTER
                        </button>
                        <p>By continuing, you agree to Musicart privacy notice and conditions of use.</p>
                    </form>
                    <br></br>
                    <h4 style={{ cursor: "pointer", color: "black" }} onClick={navigateToLogin}>
                        Already have an account? Sign in
                    </h4>
                </div>
            </div>
        </Layout>
    );
};

export default Register;
