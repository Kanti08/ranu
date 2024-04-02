// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import "./product.css"

// // const ProductList = () => {
// //     const [products, setProducts] = useState([]);

// //     useEffect(() => {
// //         async function fetchProducts() {
// //             try {
// //                 const response = await axios.get('http://localhost:8001/api/products/product');
// //                 setProducts(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching products:', error);
// //             }
// //         }

// //         fetchProducts();
// //     }, []);

// //     return (
// //         <div >
// //             <h2>Products</h2>
// //             <ul>
// //                 {Array.isArray(products) ? (
// //                     products.map(product => (
// //                         <li key={product.id}>
// //                             <img src={product.imageUrl} alt={product.title} />
// //                             <h3>{product.title}</h3>
// //                             <p>{product.description}</p>
// //                             <p>Price: ${product.price}</p>
// //                         </li>
// //                     ))
// //                 ) : (
// //                     <p>Loading...</p>
// //                 )}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default ProductList;

// import React from 'react';
// import "./product.css"
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//     const navigate = useNavigate();
//     return (
//         <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
//             <div className="product-image">
//                 <img src={product.imageUrl} alt={product.title} />
//             </div>
//             <div className="product-details">
//                 {/* <p>{product.id}</p> */}
//                 <h3 className="product-title">{product.company}</h3>
//                 <p className="product-description">{product.headphoneType}</p>
//                 <p className="product-price">Price: ₹{product.price}</p>
//                 <h3 className="product-title">{product.color}</h3>
//                 <button >More Details</button>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./product.css"

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
//         <div >
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

import React from 'react';
import "./product.css"
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="product-image">
                <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className="product-details">
                {/* <p>{product.id}</p> */}
                <h3 className="product-title">{product.company}</h3>
                <p className="product-description">{product.headphoneType}</p>
                <p className="product-price">Price: ${product.price}</p>
                <h3 className="product-title">{product.color}</h3>
                <button >More Details</button>
            </div>
        </div>
    );
};

export default ProductCard;

