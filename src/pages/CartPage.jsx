// import React from 'react';
// import { useCart } from '../components/context/cart';
// import Layout from '../components/Layouts/Layouts';
// import {useAuth} from "../components/context/auth"

// const CartPage = () => {


//     const {cart,setCart}= useCart();
//     const {auth,setaAuth} = useAuth();
   
//     return (
//         <Layout>
//            <div className='container'>
//             <div className='row'>
//                 <div className='col-md-12'>
                 
//                 </div>

//             </div>
//            </div>
//         </Layout>
//     );
// };

// export default CartPage;

// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../components/context/auth'; // Import the useAuth hook to access user information
// import { useCart } from '../components/context/cart'; // Import the useCart hook to access cart information

// const CartPage = () => {
//     const { user } = useAuth(); // Get current user from useAuth hook
//     const { cart } = useCart(); // Access the cart state from the useCart hook

//     return (
//         <div>
//             <h1>Cart</h1>
//             {user && <p>Welcome, {user.name}!</p>} {/* Display user's name if logged in */}
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <div>
//                     <p>Total Products in Cart: {cart.length}</p>
//                     <ul>
//                         {cart.map((product, index) => (
//                             <li key={index}>
//                                 <h3>{product.title}</h3>
//                                 <p>Price: ${product.price}</p>
//                                 {/* Add any other product information you want to display */}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;


// import React from 'react';
// import { useAuth } from '../components/context/auth'; // Import the useAuth hook to access user information
// import { useCart } from '../components/context/cart'; // Import the useCart hook to access cart information
// import './cart.css'; // Import CSS file for cart page styles

// const CartPage = () => {
//     const { user } = useAuth(); // Get current user from useAuth hook
//     const { cart, removeFromCart } = useCart(); // Access the cart state and removeFromCart function from the useCart hook

//     const handleRemoveFromCart = (productId) => {
//         removeFromCart(productId); // Call the removeFromCart function with the productId to remove the product from the cart
//     };

//     return (
//         <div className="cart-container">
//             <h1 className="cart-title">Cart</h1>
//             {user && <p className="welcome-message">Welcome, {user.name}!</p>} {/* Display user's name if logged in */}
//             {cart.length === 0 ? (
//                 <p className="empty-cart-message">Your cart is empty. Start shopping now!</p>
//             ) : (
//                 <div>
//                     <p className="cart-summary">Total Products in Cart: {cart.length}</p>
//                     <ul className="product-list">
//                         {cart.map((product, index) => (
//                             <li key={index} className="product-item">
//                                 <h3>{product.title}</h3>
//                                 <p className="product-price">Price: ${product.price}</p>
//                                 {/* Add any other product information you want to display */}
//                                 <button className="remove-button" onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/context/auth'; // Import the useAuth hook to access user information
import { useCart } from '../components/context/cart'; // Import the useCart hook to access cart information

const CartPage = () => {
    const { user } = useAuth(); // Get current user from useAuth hook
    const { cart, removeFromCart } = useCart(); // Access the cart state and removeFromCart function from the useCart hook

    // Calculate total price of all products in the cart
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId); // Call the removeFromCart function with the productId to remove the product from the cart
    };

    return (
        <div>
            <h1>Cart</h1>
            {user && <p>Welcome, {user.name}!</p>} {/* Display user's name if logged in */}
            {cart.length === 0 ? (
                <p>Your cart is empty. <Link to="/shop">Continue shopping</Link>.</p>
            ) : (
                <div>
                    <p>Total Products in Cart: {cart.length}</p>
                    <ul>
                        {cart.map((product, index) => (
                            <li key={index}>
                                <h3>{product.title}</h3>
                                <p>Price: ${product.price}</p>
                                {/* Add any other product information you want to display */}
                                <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    <Link to={`/checkout?total=${totalPrice}`}>Buy Now</Link>
                </div>
            )}
        </div>
    );
};

export default CartPage;
