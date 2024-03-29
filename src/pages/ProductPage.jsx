// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         async function fetchProducts() {
//             try {
//                 const response = await axios.get('http://localhost:8001/api/products/product');
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         }

//         fetchProducts();
//     }, []);

//     return (
//         <div>
//             <h2>Products</h2>
//             <ul>
//                 {Array.isArray(products) ? (
//                     products.map(product => (
//                         <li key={product.id}>
//                             <img src={product.imageUrl} alt={product.title} />
//                             <h3>{product.title}</h3>
//                             <p>{product.description}</p>
//                             <p>Price: ${product.price}</p>
//                         </li>
//                     ))
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default ProductList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./product.css";
import ProductCard from "../components/Home/ProductCard"
import { Button } from '@mui/material';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('http://localhost:8001/api/products/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div >
            <h2>Products</h2>
            <ul>
               
                {Array.isArray(products) ? (
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />

                   
                        
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </ul>
        </div>
    );
};

export default ProductPage;
