// import React, { useState, useEffect } from 'react';
// import Layouts from '../components/Layouts/Layouts';
// import Navba from '../components/Layouts/Navba';
// import { useParams } from 'react-router-dom';

// function OrderDetails() {
//     const [order, setOrder] = useState(null);
//     const [error, setError] = useState(null);
//     const { orderId } = useParams(); // Extract orderId from URL params

//     useEffect(() => {
//         async function fetchOrderDetails() {
//             try {
//                 const response = await fetch(`http://localhost:8001/api/order/fetch/${orderId}`);
//                 const data = await response.json();

//                 if (!data.order) {
//                     setError('Order not found');
//                     return;
//                 }

//                 setOrder(data.order);
//             } catch (error) {
//                 console.error('Error fetching order details:', error);
//                 setError('Failed to fetch order details');
//             }
//         }

//         fetchOrderDetails();
//     }, [orderId]); // Re-run effect when orderId changes

//     return (
//         <Layouts>
//             <Navba />
//             <div>
//                 <h1 style={{ textAlign: "center" }}>Order Details</h1>
//                 {error && <p>{error}</p>}
//                 {order ? (
//                     <div style={{ marginTop: "110px", marginLeft: "120px", marginRight: "120px" }}>
//                         <p>Order ID: {order._id}</p>
//                         <p>Name: {order.name}</p>
//                         <p>Address: {order.address}</p>
//                         {/* Add more order details here */}
//                     </div>
//                 ) : (
//                     !error && <p>Loading...</p>
//                 )}
//             </div>
//         </Layouts>
//     );
// }

// export default OrderDetails;



import React, { useState, useEffect } from 'react';
import Layout from "../components/Layouts/Layouts";
import { useCart } from "../components/context/cart";
import { useAuth } from "../components/context/auth";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import Axios library
import "./check.css"
import Navba from "../components/Layouts/Navba"

const CheckoutPage = () => {
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);
    const { orderId } = useParams();
    const [cart] = useCart();
    const [auth] = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        totalPrice: "",
        deliveryDate: ""
    });

    // Calculate total price, delivery charge, and total MRP
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

    // Fetch order details from the backend API
    useEffect(() => {
        async function fetchOrderDetails() {
            try {
                const response = await axios.get(`http://localhost:8001/api/order/fetch/${orderId}`);
                const fetchedOrder = response.data.order;

                if (!fetchedOrder) {
                    setError('Order not found');
                    return;
                }

                setOrder(fetchedOrder);
                setFormData({
                    name: fetchedOrder.name,
                    address: fetchedOrder.address,
                    // Set other form data if needed
                });
            } catch (error) {
                console.error('Error fetching order details:', error);
                setError('Failed to fetch order details');
            }
        }

        fetchOrderDetails();
    }, [orderId]);

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
        // Your place order logic here
    };

    return (
        <Layout>
            <Navba />
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>CHECKOUT</h1>
            <div className="container">
                <div className="row">
                    {/* Display delivery address */}
                    <div className="column">
                        <p style={{ color: "#B52B00", padding: "40px",textAlign:"bold" }}>Delivery address</p>
                        <p style={{ color: "#B52B00", padding: "40px", textAlign: "bold" }}>Payment method</p>
                        <p style={{ color: "#B52B00", padding: "40px", textAlign: "bold" }}>Review items and delivery</p>
                    </div>
                    {/* Display form for payment method and order summary */}
                    <div className="column">
                        <form className="from">
                            {/* Form for payment method */}
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
                            {/* Payment method dropdown */}
                            <select
                                className="form-control"
                                id="payment"
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                
                            >
                                <p>Payment Method: {formData.paymentMethod}</p>
                                <option value="credit">Pay on delivery</option>
                                <option value="debit">UPI</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </form>
                        {/* Display cart items */}
                        <div className="div">
                            {cart?.map((item) => (
                                <div key={item._id}>
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
                    {/* Display order summary */}
                    <div className="column">
                        <div className="card" style={{ width: '650px', height: '250px' }}>
                            <h4 style={{ marginLeft: "5px" }}>Order Summary</h4>
                            <h6 style={{ marginLeft: "10px", color: "#797979" }}>Total: {totalPrice()}</h6>
                            <h6 style={{ marginLeft: "15px", color: "#797979" }}>Delivery Charge: {deliveryCharge()} </h6>
                            <hr />
                            <h4 style={{ marginLeft: "15px" }}>Order Total: {totalMRP()} </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPage;
