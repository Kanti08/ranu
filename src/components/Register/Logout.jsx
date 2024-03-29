import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get('http://localhost:8001/api/v1/auth/user'); // Assuming the endpoint to fetch user data is '/user'
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchUserData();
    }, []);

    // const handleLogout = async () => {
    //     try {
    //         await axios.get('https://localhost:8001/api/v1/auth/logout');
    //         // Optionally, you can redirect the user to the login page after successful logout
    //         // window.location.href = '/login';
    //     } catch (error) {
    //         console.error('Logout failed:', error);
    //     }
    // };

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:8001/api/v1/auth/logout'); // Use HTTP instead of HTTPS
            // Optionally, you can redirect the user to the login page after successful logout
            // window.location.href = '/login';
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div>
            {user ? (
                <div style={{color:'white'}}>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default Logout;
