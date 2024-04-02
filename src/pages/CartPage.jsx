



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CartPage = () => {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         // Function to fetch cart data
//         const fetchCartData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8001/api/cart/all'); // Assuming your backend is running on the same host
//                 setCartItems(response.data); // Set the fetched cart data in state
//             } catch (error) {
//                 console.error('Error fetching cart data:', error);
//             }
//         };

//         fetchCartData(); // Call the function to fetch cart data when the component mounts
//     }, []);

//     return (
//         <div>
//             <h1>Cart</h1>
//             <ul>
//                 {cartItems.map((item) => (
//                     <li key={item._id}>
//                         <p>{item.productName}</p> {/* Assuming productName is a property in your cart item */}
//                         <p>{item.quantity}</p>
//                         <p>{item.price}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CartPage;

// 
import React from "react";
import Layout from "../components/Layouts/Layouts";
import { useCart } from "../components/context/cart";
import { useAuth } from "../components/context/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import "./cart.css"
import Navba from "../components/Layouts/Navba"

const CartPage = () => {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    // Clear cart and redirect to login page on logout
    const handleLogout = () => {
        setAuth(null);
        setCart([]);
        localStorage.removeItem("cart");
        navigate("/login");
    };

    // Total price calculation
    const totalPrice = () => {
        try {
            let total = 0;
            cart?.forEach((item) => {
                total += item.price;
            });
            return total.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
            });
        } catch (error) {
            console.log(error);
        }
    };

    // Delete item from cart
    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === pid);
            if (index !== -1) {
                myCart.splice(index, 4);
                setCart(myCart);
                localStorage.setItem("cart", JSON.stringify(myCart));
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Redirect to login page if user is not authenticated
    if (!auth?.token) {
        return <Navigate to="/login" />;
    }
    const HomePage = () => {
        // Redirect to the home page
        window.location.href = "/"; // Replace "/" with the URL of your home page
    };

    return (
        <Layout>
            <button
                className="button3"
                onClick={HomePage}
            >
                Back TO Product
            </button>

            <Navba/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 >
                            <LocalMallOutlinedIcon/>MY CART
                        </h1>
                        
                        
                    </div>
                </div>
                {/* Cart items */}
                <div className="row" >
                   

                    <div className="col-md-8">
                        {cart?.map((p) => (
                            <div className="row mb-2 p-3  flex-row" key={p._id}>
                                <div className="col-md-3">
                                    <img
                                        src={p.imageUrl}
                                        className="card-img-top"
                                        alt={p.name}
                                        width="220px"
                                        height="250px"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <h4><b>{p.headphoneType}</b></h4>
                                    <p>{p.color}</p>
                                    <p>{p.Avilable}</p>
                                </div>

                                    
                                    
                                    <div class="col-md-2">
                                    <h4>Price</h4>
                                        <p>Price: {p.price}</p>
                                    </div>
                                    <div class="col-md-2">
                                    <h4>Total {totalPrice()} </h4>
                                    </div>
                                    <div class="col-md-2">
                                    <select id="quantity" name="quantity">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    </div>
                                
                            </div>
                        ))}
                    </div>
                    

                    
                    {/* Cart summary */}
                    <div className="col-md-4 text-center">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>PRICE DETAILS</h4>
                        <p>Total MRP   </p>
                        <p>Convenience Fee  </p>
                        
                        <h4>Total : {totalPrice()} </h4>
                        {/* Displaying user's current address */}
                        <div className="mb-3">
                            <h4>Total Amount</h4>
                            <h5>{auth?.user?.address}</h5>
                            <button
                                className="btn "
                                onClick={() => navigate("/all")}
                            >
                                placeOrder
                            </button>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-center">
                            {cart?.length
                                ? `You Have ${cart.length} items in your cart`
                                : " Your Cart Is Empty"}
                        </h4>
                    </div>
                </div>
              
            </div>
        </Layout>
    );
};

export default CartPage;


// import React from "react";
// import Layout from "../components/Layouts/Layouts";
// import { useCart } from "../components/context/cart";
// import { useAuth } from "../components/context/auth";
// import { useNavigate, Navigate } from "react-router-dom";
// import { NavLink, Link } from "react-router-dom";
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import "./cart.css"

// const CartPage = () => {
//     const [auth, setAuth] = useAuth();
//     const [cart, setCart] = useCart();
//     const navigate = useNavigate();

//     // Clear cart and redirect to login page on logout
//     const handleLogout = () => {
//         setAuth(null);
//         setCart([]);
//         localStorage.removeItem("cart");
//         navigate("/login");
//     };

//     // Total price calculation
//     const totalPrice = () => {
//         let total = 0;
//         cart?.forEach((item) => {
//             total += item.price;
//         });
//         return total.toLocaleString("en-IN", {
//             style: "currency",
//             currency: "INR",
//         });
//     };

//     // Delivery charge calculation
//     const deliveryCharge = () => {
//         // Sample calculation, adjust as needed
//         return 100; // Assuming a flat delivery charge of 100 INR
//     };

//     // Total MRP calculation
//     const totalMRP = () => {
//         let total = 0;
//         cart?.forEach((item) => {
//             total += item.price;
//         });
//         return (total + deliveryCharge()).toLocaleString("en-IN", {
//             style: "currency",
//             currency: "INR",
//         });
//     };

//     // Delete item from cart
//     const removeCartItem = (pid) => {
//         try {
//             let myCart = [...cart];
//             let index = myCart.findIndex((item) => item._id === pid);
//             if (index !== -1) {
//                 myCart.splice(index, 1);
//                 setCart(myCart);
//                 localStorage.setItem("cart", JSON.stringify(myCart));
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     // Redirect to login page if user is not authenticated
//     if (!auth?.token) {
//         return <Navigate to="/login" />;
//     }

//     return (
//         <Layout>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h1 >
//                             <LocalMallOutlinedIcon />MY CART
//                         </h1>
//                     </div>
//                 </div>
//                 {/* Cart items */}
//                 <div className="row" >
//                     <div className="col-md-8">
//                         {cart?.map((p) => (
//                             <div className="row mb-2 p-3  flex-row" key={p._id}>
//                                 <div className="col-md-3">
//                                     <img
//                                         src={p.imageUrl}
//                                         className="card-img-top"
//                                         alt={p.name}
//                                         width="220px"
//                                         height="250px"
//                                     />
//                                 </div>
//                                 <div class="col-md-3">
//                                     <h4><b>{p.headphoneType}</b></h4>
//                                     <p>{p.color}</p>
//                                     <p>{p.Avilable}</p>
//                                 </div>
//                                 <div class="col-md-2">
//                                     <h4>Price</h4>
//                                     <p>Price: {p.price}</p>
//                                 </div>
//                                 <div class="col-md-2">
//                                     <h4>Total {totalPrice()} </h4>
//                                 </div>
//                                 <div class="col-md-2">
//                                     <select id="quantity" name="quantity">
//                                         <option value="1">1</option>
//                                         <option value="2">2</option>
//                                         <option value="3">3</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     {/* Cart summary */}
//                     <div className="col-md-4 text-center">
//                         <br></br>
//                         <br></br>
//                         <br></br>
//                         <br></br>
//                         <h4>PRICE DETAILS</h4>
//                         <p>Total MRP: {totalMRP()} </p>
//                         <p>Delivery Charge: {deliveryCharge()} </p>

                       
//                         {/* Displaying user's current address */}
//                         <div className="mb-3" style={{marginTop:"70px"}}>
//                             <h4>Total Amount: {totalMRP()} </h4>
                            
//                             <button
//                                 className="btn-btn1 "
//                                 onClick={() => navigate("/all")}
//                             >
//                                 placeOrder
//                             </button>
//                         </div>
//                     </div>
//                     <div>
//                         <h4 className="text-center">
//                             {cart?.length
//                                 ? `You Have ${cart.length} items in your cart`
//                                 : " Your Cart Is Empty"}
//                         </h4>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default CartPage;
