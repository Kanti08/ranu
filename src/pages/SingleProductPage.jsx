
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layouts from '../components/Layouts/Layouts'; // Update the path accordingly
import { useCart } from '../components/context/cart'; // Update the path accordingly

const SingleProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { cart, addToCart } = useCart(); // Destructure addToCart function from useCart
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get(`http://localhost:8001/api/products/product/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }

        fetchProduct();
    }, [productId]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product); // Use addToCart function to add product to cart
            navigate('/cart');
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Layouts>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className='col-md-6'>
                    <h2>{product.title}</h2>
                    <p>{product.color}</p>
                    <p>Price: ${product.price}</p>
                    <br></br>
                    <br></br>
                    <div>
                        <button className="btn btn-secondary ms-1" onClick={handleAddToCart}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </Layouts>
    );
}

export default SingleProductPage;
