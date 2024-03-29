

import { useState } from "react";
import styles from "./register.module.css";
import { useNavigate } from "react-router";
// import Button from "../Button/Button";
import { registerUser } from "../../api/auth";

const Register = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!data.name || !data.mobile || !data.email || !data.password) {
            alert("Please fill in all fields.");
            return;
        }
        const response = await registerUser({ ...data });
        if (response) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("userName", response.name);
            navigate("/");
        }
    };

    const redirectToLoginPage = () => {
        navigate("/login");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Create an account</h1>
            <h2 className={styles.h2}>Your personal job finder is here</h2>
            <input
                className={styles.input}
                name="name"
                value={data.name}
                onChange={handleChange}
                type={"text"}
                placeholder="Name"
            ></input>
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
                name="mobile"
                value={data.mobile}
                onChange={handleChange}
                type={"tel"}
                placeholder="Mobile"
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
                Create Account
            </button>
            {/* <Button>Create account</Button> */}
            <p className={styles.footer}>
                Already have an account?
                <span
                    className={styles.underline}
                    onClick={redirectToLoginPage}
                >
                    Sign in
                </span>
            </p>
        </div>
    );
};

export default Register;
// import React, { useState } from "react";
// import Layout from "../Layouts/Layouts"
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import  "./register.css"
// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [mobile, setMobile] = useState("");
    
   
//     const navigate = useNavigate();

//     // form function
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:8001/api/v1/auth/register", {
//                 name,
//                 email,
//                 password,
//                mobile,
//             });
//             if (res && res.data.success) {
//                 toast.success(res.data && res.data.status);
//                 navigate("/login");
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
//                     <h4 className="title">REGISTER FORM</h4>
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="form-control"
//                             id="exampleInputEmail1"
//                             placeholder="Enter Your Name"
//                             required
//                             autoFocus
//                         />
//                     </div>
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
//                         <input
//                             type="text"
//                             value={mobile}
//                             onChange={(e) => setMobile(e.target.value)}
//                             className="form-control"
//                             id="exampleInputEmail1"
//                             placeholder="Enter Your Phone"
//                             required
//                         />
//                     </div>
                   
                  
//                     <button type="submit" className="btn btn-primary">
//                         REGISTER
//                     </button>
//                 </form>
//             </div>
//         </Layout>
//     );
// };

// export default Register;