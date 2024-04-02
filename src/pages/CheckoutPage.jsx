


// import React, { useState } from "react";
// import Layout from "../components/Layouts/Layouts";
// import { useCart } from "../components/context/cart";
// import { useAuth } from "../components/context/auth";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios library

// const CheckoutPage = () => {
//     const [cart] = useCart();
//     const [auth] = useAuth();
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: "",
//         address: "",
//         totalPrice: "",
//         deliveryDate: ""
//     });

//     // Calculate total price
//     const totalPrice = () => {
//         let total = 0;
//         cart?.forEach((item) => {
//             total += item.price;
//         });
//         return total.toLocaleString("en-US", {
//             style: "currency",
//             currency: "USD",
//         });
//     };

//     // Handle form input change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Handle place order action
//     const placeOrder = async () => {
//         try {
//             // Make API call to place order
//             const response = await axios.post("http://localhost:8001/api/order/place", {
//                 items: cart,
//                 userId: auth.user.id,
//                 total: totalPrice(),
//                 ...formData
//             });
//             // If order placed successfully, redirect to thank you page
//             navigate("/thank-you");
//         } catch (error) {
//             console.error("Error placing order:", error);
//             // Handle error, e.g., show error message to the user
//         }
//     };

//     return (
//         <Layout>
//             <div className="container">
//                 <h1 className="text-center">Checkout</h1>
//                 <div className="row">
//                     <div className="col-md-8">
//                         {/* Display cart items */}
//                         {cart?.map((item) => (
//                             <div key={item._id}>
//                                 <p>{item.company}</p>
//                                 <p>Price: {item.price}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="col-md-4">
//                         {/* Display total price */}
//                         <h3>Total: {totalPrice()}</h3>
//                         {/* Name, address, totalPrice, and deliveryDate form */}
//                         <form>
//                             <div className="mb-3">
//                                 <label htmlFor="name" className="form-label">Name</label>
//                                 <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="address" className="form-label">Address</label>
//                                 <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="totalPrice" className="form-label">totalPrice</label>
//                                 <input type="totalPrice" className="form-control" id="totalPrice" name="totalPrice" value={formData.totalPrice} onChange={handleChange} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="deliveryDate" className="form-label">deliveryDate</label>
//                                 <input type="text" className="form-control" id="deliveryDate" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} />
//                             </div>
//                             {/* Place order button */}
//                             <button type="button" className="btn btn-primary" onClick={placeOrder}>Place Order</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default CheckoutPage;





import React, { useState } from "react";
import Layout from "../components/Layouts/Layouts";
import { useCart } from "../components/context/cart";
import { useAuth } from "../components/context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios library
import "./check.css"
import Navba from "../components/Layouts/Navba"

const CheckoutPage = () => {
    const [cart] = useCart();
    const [auth] = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        totalPrice: "",
        deliveryDate: ""
    });

    // Calculate total price
    const totalPrice = () => {
        let total = 0;
        cart?.forEach((item) => {
            total += item.price;
        });
        return total.toLocaleString("en-US", {
            style: "currency",
            currency: "INR",
        });
    };

    const deliveryCharge = () => {
        // Sample calculation, adjust as needed
        return 100; // Assuming a flat delivery charge of 100 INR
    };

    // Total MRP calculation
    const totalMRP = () => {
        let total = 0;
        cart?.forEach((item) => {
            total += item.price;
        });
        return (total + deliveryCharge()).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
        });
    };
    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle place order action
    const placeOrder = async () => {
        try {
            // Make API call to place order
            const response = await axios.post("http://localhost:8001/api/order/place", {
                items: cart,
                userId: auth.user.id,
                total: totalPrice(),
                ...formData
            });
            // If order placed successfully, redirect to thank you page
            navigate("/thank-you");
        } catch (error) {
            console.error("Error placing order:", error);
            // Handle error, e.g., show error message to the user
        }
      
    };
    const HomePage = () => {
        // Redirect to the home page
        window.location.href = "/cart"; // Replace "/" with the URL of your home page
    };

    return (
        <Layout>
            <Navba/>
            <button
                className="button3"
                onClick={HomePage}
            >
                Go to cart
            </button>
            <h1 style={{textAlign:"center",marginTop:"50px"}}>CHECKOUT</h1>
            <div className="container">
                
                <div className="row">                    
                        <div className="column">
                        <p style={{ color: "#B52B00",padding:"30px" }} >Delivery address</p>
                        
                        <p className="1" style={{ color:"#B52B00",padding:"60px" }} >Payment method</p>
                        <p style={{ color: "#B52B00" }} >Review items and delivery</p>
                        </div>
                        <div className="column">
                            <form className="from">
                                <div className="mb-5">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <h2></h2>
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
                                </div>
                              
                                <hr></hr>
                                <select
                                    className="form-control"
                                    id="payment"
                                    name="paymentMethod" // Name attribute to identify the field in formData
                                    value={formData.paymentMethod}
                                    onChange={handleChange}
                                >
                                    <option value="">Payment Mode</option>
                                    <option value="credit">pay on delivery</option>
                                    <option value="debit">UPI</option>
                                    <option value="paypal">PayPal</option>
                                </select>

                                {/* Place order button */}

                            </form>
                        <div className="div">
                            {/* Display cart items */}
                            {cart?.map((item) => (
                                <div key={item._id}>
                                    <img
                                        src={item.imageUrl}
                                        className="card-img-top"
                                        alt={item.name}
                                        width="220px"
                                        height="250px"
                                    />
                                    <img
                                        src={item.imageUrl}
                                        className="card-img-top"
                                        alt={item.name}
                                        width="220px"
                                        height="250px"
                                    />
                                    <h6>{item.company}</h6>
                                    <h6>Price: {item.price}</h6>
                                </div>
                            ))}
                        </div>

                        </div>
                        <div className="column">
                            <div className="card">
                            <button className="butt" onClick={placeOrder}>place holder</button>
                                
                            <h6 style={{marginLeft:"5px",marginRight:"5px"}} >By placing your order, you agree to Musicart privacy notice and conditions of use.</h6>
                                <hr></hr>
                            <h4 style={{ marginLeft: "5px" }}>order summary</h4>
                            
                            <h6 style={{
                                marginLeft: "10px", color: "#797979" }}>Total: {totalPrice()}</h6>
                            <h6 style={{ marginLeft: "15px" ,color: "#797979" }}>Delivery Charge: {deliveryCharge()} </h6>
                              <hr></hr>
                           

                            <h4 style={{ marginLeft: "15px",  }}>Oder Total: {totalMRP()} </h4>
                          </div>
                        </div>
                  
                </div>
                
            </div>
            
        </Layout>
    );
};

export default CheckoutPage;


// import React, { useState } from "react";
// import Layout from "../components/Layouts/Layouts";
// import { useCart } from "../components/context/cart";
// import { useAuth } from "../components/context/auth";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios library

// const CheckoutPage = () => {
//     const [cart] = useCart();
//     const [auth] = useAuth();
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: "",
//         address: "",
//         totalPrice: "",
//         deliveryDate: "",
//         paymentMethod: "" // Add paymentMethod field to formData
//     });

//     // Calculate total price
//     const totalPrice = () => {
//         let total = 0;
//         cart?.forEach((item) => {
//             total += item.price;
//         });
//         return total.toLocaleString("en-US", {
//             style: "currency",
//             currency: "USD",
//         });
//     };

//     // Handle form input change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Handle place order action
//     const placeOrder = async () => {
//         try {
//             // Make API call to place order
//             const response = await axios.post("http://localhost:8001/api/order/place", {
//                 items: cart,
//                 userId: auth.user.id,
//                 total: totalPrice(),
//                 ...formData
//             });
//             // If order placed successfully, redirect to thank you page
//             navigate("/thank-you");
//         } catch (error) {
//             console.error("Error placing order:", error);
//             // Handle error, e.g., show error message to the user
//         }
//     };

//     return (
//         <Layout>
//             <div className="container">
//                 <h1 className="text-center">Checkout</h1>
//                 <div className="row">
//                     <div className="col-md-8">
//                         {/* Display cart items */}
//                         {cart?.map((item) => (
//                             <div key={item._id}>
//                                 <p>{item.company}</p>
//                                 <p>Price: {item.price}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="col-md-4">
//                         {/* Display total price */}
//                         <h3>Total: {totalPrice()}</h3>
//                         {/* Name, address, totalPrice, deliveryDate, and paymentMethod form */}
//                         <form>
//                             <div className="mb-3">
//                                 <label htmlFor="name" className="form-label">Name</label>
//                                 <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="address" className="form-label">Address</label>
//                                 <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="totalPrice" className="form-label">Total Price</label>
//                                 <input type="text" className="form-control" id="totalPrice" name="totalPrice" value={formData.totalPrice} onChange={handleChange} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="deliveryDate" className="form-label">Delivery Date</label>
//                                 <input type="text" className="form-control" id="deliveryDate" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
//                                 <select className="form-select" id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
//                                     <option value="">Select Payment Method</option>
//                                     <option value="credit_card">Credit Card</option>
//                                     <option value="debit_card">Debit Card</option>
//                                     <option value="paypal">PayPal</option>
//                                     {/* Add more payment methods as needed */}
//                                 </select>
//                             </div>
//                             {/* Place order button */}
//                             <button type="button" className="btn btn-primary" onClick={placeOrder}>Place Order</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default CheckoutPage;
