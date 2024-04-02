
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import Layouts from '../components/Layouts/Layouts'; // Update the path accordingly
// import { useCart } from '../components/context/cart'; // Update the path accordingly

// const SingleProductPage = () => {
//     const { productId } = useParams();
//     const [product, setProduct] = useState(null);
//     const [cart, setCart] = useCart(); // Destructure addToCart function from useCart
//     const navigate = useNavigate();

//     useEffect(() => {
//         async function fetchProduct() {
//             try {
//                 const response = await axios.get(`http://localhost:8001/api/products/product/${productId}`);
//                 setProduct(response.data);
//             } catch (error) {
//                 console.error('Error fetching product:', error);
//             }
//         }

//         fetchProduct();
//     }, [productId]);

    


//     if (!product) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Layouts>
//             <div className='row'>
//                 <div className='col-md-6'>
//                     <img src={product.imageUrl} alt={product.title} />
//                 </div>
//                 <div className='col-md-6'>
//                     <h2>{product.title}</h2>
//                     <p>{product.color}</p>
//                     <p>Price: ${product.price}</p>
//                     <br></br>
//                     <br></br>
//                     <div>
//                         <button
//                             className="btn btn-dark ms-1"
//                             onClick={() => {
//                                 setCart([...cart, product]);
//                                 localStorage.setItem(
//                                     "cart",
//                                     JSON.stringify([...cart, product])
//                                 );
//                                 toast.success("Item Added to cart");
//                             }}
//                         >
//                             ADD TO CART
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </Layouts>
//     );
// }

// export default SingleProductPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Layouts from '../components/Layouts/Layouts';
import { useCart } from '../components/context/cart';
import { useAuth } from '../components/context/auth';
import "./singlepage.css";
import { NavLink, Link } from "react-router-dom";
import Navba from '../components/Layouts/Navba';


const SingleProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useCart();
    const [auth] = useAuth();
    const [mainImage, setMainImage] = useState(null);
    

    const HomePage = () => {
        // Redirect to the home page
        window.location.href = "/"; // Replace "/" with the URL of your home page
    };
    const kanti = () => {
        // Redirect to the home page
        window.location.href = "/cart"; // Replace "/" with the URL of your home page
    };

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get(`http://localhost:8001/api/products/product/${productId}`);
                setProduct(response.data);
                setMainImage(response.data.imageUrl); // Set initial main image URL
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }

        fetchProduct();
    }, [productId]);

    const addToCart = async () => {
        try {
            const requestData = {
                ...product,
                userName: auth?.user?.name // Include user's name in the request data
            };

            const response = await axios.post('http://localhost:8001/api/cart/add', requestData);
            setCart([...cart, product]);
            localStorage.setItem("cart", JSON.stringify([...cart, product]));
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error adding product to cart:', error);
            toast.error('Error adding product to cart');
        }
    };

    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl); // Update main image URL
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Layouts>
<Navba/>
            <button
                className="button3"
                onClick={HomePage}
            >
                Back TO Product
            </button>
            
            
            <div className='row'>
                <div className='title'><b>Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)</b></div>
                <div className='col-md-6'>
                    <div className="product-images">
                        <img src={mainImage} alt={product.title} className="main-image" />
                        <div className="small-images">
                            {/* Here you can map over product.smallImages if available and create thumbnails */}
                            <img src={product.imageUrl1} alt={product.title} onClick={() => handleImageClick(product.imageUrl1)} />
                            <img src={product.imageUrl2} alt={product.title} onClick={() => handleImageClick(product.imageUrl2)} />
                            <img src={product.imageUrl} alt={product.title} onClick={() => handleImageClick(product.imageUrl)} />
                        </div>
                    </div>
                </div>
                <div className='col-md-6' >
                    <div className="product-details">
                        <h1>{product.headphoneType}</h1>
                        
                        <p className='price'>Price - ₹ {product.price}</p>
                        <p className='product1'> {product.color}</p><br></br>
                       
                      
                        <br></br>
                        <p className='A'><b>Available</b>{product.Available}</p>
                        <p className='B'> <b>Brand</b>{product.Brand}</p>

                        <p>{product.li1}<br></br>{product.li2}<br></br>{product.li3}<br></br>{product.li4}<br></br>{product.li5}</p>
                       
                      
                        <br></br>
                        <br></br>
                        <div>
                            <button
                                className="button1"
                                onClick={addToCart}
                            >
                                Add To Cart
                            </button>
                        </div>
                        
                    </div>
                    <div>
                        
                            <Link to="/cart"  >
                                <button className='button'>Buy Now</button>
                            </Link>
                        
                    </div>
                </div>
            </div>
        </Layouts>
    );
}

export default SingleProductPage;
