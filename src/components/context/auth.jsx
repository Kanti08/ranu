// import { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";

// const AuthContext = createContext();
// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         user: null,
//         token: "",
//     });

//     //default axios
//     axios.defaults.headers.common["Authorization"] = auth?.token;

//     useEffect(() => {
//         const data = localStorage.getItem("auth");
//         if (data) {
//             const parseData = JSON.parse(data);
//             setAuth({
//                 ...auth,
//                 user: parseData.user,
//                 token: parseData.token,
//             });
//         }
//         //eslint-disable-next-line
//     }, []);
//     return (
//         <AuthContext.Provider value={[auth, setAuth]}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // custom hook
// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };

// // // authContext.js
// // // import { useState, useEffect, useContext, createContext } from "react";
// // // import axios from "axios";

// // // const AuthContext = createContext();
// // // const AuthProvider = ({ children }) => {
// // //     const [auth, setAuth] = useState({
// // //         user: null,
// // //         token: "",
// // //     });

// // //     //default axios
// // //     axios.defaults.headers.common["Authorization"] = auth?.token;

// // //     useEffect(() => {
// // //         const data = localStorage.getItem("auth");
// // //         if (data) {
// // //             const parseData = JSON.parse(data);
// // //             setAuth({
// // //                 ...auth,
// // //                 user: parseData.user,
// // //                 token: parseData.token,
// // //             });
// // //         }
// // //         //eslint-disable-next-line
// // //     }, []);
// // //     return (
// // //         <AuthContext.Provider value={[auth, setAuth]}>
// // //             {children}
// // //         </AuthContext.Provider>
// // //     );
// // // };

// // // // custom hook
// // // const useAuth = () => useContext(AuthContext);

// // // export { useAuth, AuthProvider };

// // // import { useState, useEffect, useContext, createContext } from "react";
// // // import axios from "axios";

// // // const AuthContext = createContext();
// // // const AuthProvider = ({ children }) => {
// // //     const [auth, setAuth] = useState({
// // //         user: null,
// // //         token: "",
// // //     });

// // //     //default axios
// // //     axios.defaults.headers.common["Authorization"] = auth?.token;

// // //     useEffect(() => {
// // //         const data = localStorage.getItem("auth");
// // //         if (data) {
// // //             const parseData = JSON.parse(data);
// // //             setAuth({
// // //                 ...auth,
// // //                 user: parseData.user,
// // //                 token: parseData.token,
// // //             });
// // //         }
// // //         //eslint-disable-next-line
// // //     }, []);
// // //     return (
// // //         <AuthContext.Provider value={[auth, setAuth]}>
// // //             {children}
// // //         </AuthContext.Provider>
// // //     );
// // // };

// // // // custom hook
// // // const useAuth = () => useContext(AuthContext);

// // // export { useAuth, AuthProvider };







// import { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";

// const AuthContext = createContext();
// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         user: null,
//         token: "",
//     });

//     //default axios
//     axios.defaults.headers.common["Authorization"] = auth?.token;

//     useEffect(() => {
//         const data = localStorage.getItem("auth");
//         if (data) {
//             const parseData = JSON.parse(data);
//             setAuth({
//                 ...auth,
//                 user: parseData.user,
//                 token: parseData.token,
//             });
//         }
//         //eslint-disable-next-line
//     }, []);
//     return (
//         <AuthContext.Provider value={[auth, setAuth]}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // custom hook
// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };


// // AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const login = (userData) => {
//         setUser(userData);
//     };

//     const logout = () => {
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

// import { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";

// const AuthContext = createContext();
// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         user: null,
//         token: "",
//     });

//     //default axios
//     axios.defaults.headers.common["Authorization"] = auth?.token;

//     useEffect(() => {
//         const data = localStorage.getItem("auth");
//         if (data) {
//             const parseData = JSON.parse(data);
//             setAuth({
//                 ...auth,
//                 user: parseData.user,
//                 token: parseData.token,
//             });
//         }
//         //eslint-disable-next-line
//     }, []);
//     return (
//         <AuthContext.Provider value={[auth, setAuth]}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // custom hook
// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };

import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    //default axios
    axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            });
        }
        //eslint-disable-next-line
    }, []);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };