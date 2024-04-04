import React, { useState, useEffect } from 'react';
import Layouts from '../components/Layouts/Layouts';
import Navba from '../components/Layouts/Navba';
import { useNavigate } from 'react-router-dom';

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Function to fetch orders from the server
        async function fetchOrders() {
            try {
                // Fetch orders from the server
                const response = await fetch('http://localhost:8001/api/order/fetch');
                const data = await response.json();

                // If there are no orders found
                if (!data.orders || data.orders.length === 0) {
                    setError('No orders found');
                    return;
                }

                // Set orders state with fetched data
                setOrders(data.orders);
            } catch (error) {
                console.error('Error fetching orders:', error);
                setError('Failed to fetch orders');
            }
        }

        // Call fetchOrders function when the component mounts
        fetchOrders();
    }, []);

    return (
        <Layouts>
            <Navba />
            <div>
                <h1 style={{ textAlign: "center" }}>MY Invoice</h1>
                {error && <p>{error}</p>}
                {orders.length > 0 ? (
                    <div style={{ marginTop: "110px" }}>
                        {orders.map(order => (
                            <div key={order._id} style={{ marginLeft: "120px", marginRight: "120px" }}>

                                <p>Name: {order.name}</p>
                                <p>Address: {order.address}</p>
                                {/* Pass order._id to navigate function */}
                                <button onClick={() => navigate(`/fetch/${order._id}`)}>View Details</button>
                                <hr />
                            </div>
                        ))}
                    </div>
                ) : (
                    !error && <p>Loading...</p>
                )}
            </div>

        </Layouts>
    );
}

export default OrderList;
