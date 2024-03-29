// import React, { useState } from "react";
// import Layout from "../Layout/Layout";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
// import { useAuth } from "../../context/auth";
// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [auth, setAuth] = useAuth();

//     const navigate = useNavigate();
//     const location = useLocation();

//     // form function
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("/api/v1/auth/login", {
//                 email,
//                 password,
//             });
//             if (res && res.data.success) {
//                 toast.success(res.data && res.data.message);
//                 setAuth({
//                     ...auth,
//                     user: res.data.user,
//                     token: res.data.token,
//                 });
//                 localStorage.setItem("auth", JSON.stringify(res.data));
//                 navigate(location.state || "/");
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong");
//         }
//     };
//     return (
//         <Layout title="Register - Ecommer App">
//             <div className="form-container ">
//                 <form onSubmit={handleSubmit}>
//                     <h4 className="title">LOGIN FORM</h4>

//                     <div className="mb-3">
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="form-control"
//                             id="exampleInputEmail1"
//                             placeholder="Enter Your Email "
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="form-control"
//                             id="exampleInputPassword1"
//                             placeholder="Enter Your Password"
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <button
//                             type="button"
//                             className="btn btn-primary"
//                             onClick={() => {
//                                 navigate("/HomePage");
//                             }}
//                         >
//                             Forgot Password
//                         </button>
//                     </div>

//                     <button type="submit" className="btn btn-primary">
//                         LOGIN
//                     </button>
//                 </form>
//             </div>
//         </Layout>
//     );
// };

// export default Login;


import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";
import { loginUser } from "../../api/auth";

export const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await loginUser({ ...data });
        if (response) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("userName", response.name);
            navigate("/home");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Already have an account ?</h1>
            <h2 className={styles.h2}>Your personal job finder is here</h2>
            <input
                className={styles.input}
                name="email"
                value={data.email}
                onChange={handleChange}
                type={"email"}
                placeholder="Email"
            ></input>
            <input
                className={styles.input}
                name="password"
                value={data.password}
                onChange={handleChange}
                type={"password"}
                placeholder="Password"
            ></input>
            <button onClick={handleSubmit} className={styles.button}>
                Sign in
            </button>
            <p className={styles.footer}>
                Don&apos;t have an account?
                <span
                    onClick={() => navigate("/register")}
                    className={styles.underline}
                >
                    Sign Up
                </span>
            </p>

           
        </div>
    );
};
export default Login;