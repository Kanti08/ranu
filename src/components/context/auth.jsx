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
//                 userId : parseData.userId
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

// import { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";

// const AuthContext = createContext();
// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         user: null,
//         token: "",
//         userId: "",
//     });

//     //default axios
//     axios.defaults.headers.common["Authorization"] = auth?.token;

//     useEffect(() => {
//         const data = localStorage.getItem("auth");
//         if (data) {
//             const parsedData = JSON.parse(data);
//             setAuth({
//                 user: parsedData.user,
//                 token: parsedData.token,
//                 userId: parsedData.userId // Fetch userId from localStorage
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
        userId: "", // Initialize userId
    });

    // Set default axios headers
    axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            const parsedData = JSON.parse(data);
            setAuth({
                user: parsedData.user,
                token: parsedData.token,
                userId: parsedData.userId // Fetch userId from localStorage
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

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
