import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from "../components/Home/ProductCard";
import "./home.css"
import "./list.css"

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [titleFilter, setTitleFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [headphoneTypeFilter, setHeadphoneTypeFilter] = useState('');
    const [searchCompany, setSearchCompany] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('http://localhost:8001/api/products/product');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        // Apply filters based on title, company, and searchCompany
        const applyFilters = () => {
            let filtered = [...products];
            if (titleFilter !== '') {
                filtered = filtered.filter(product => product.title.toLowerCase() === titleFilter.toLowerCase());
            }
            if (companyFilter !== '') {
                filtered = filtered.filter(product => product.company.toLowerCase() === companyFilter.toLowerCase());
            }
            if (colorFilter !== '') {
                filtered = filtered.filter(product => product.color.toLowerCase() === colorFilter.toLowerCase());
            }
            if (priceFilter !== '') {
                filtered = filtered.filter(product => product.price === parseInt(priceFilter));
            }
            if (headphoneTypeFilter !== '') {
                filtered = filtered.filter(product => product.headphoneType.toLowerCase() === headphoneTypeFilter.toLowerCase());
            }
            if (searchCompany !== '') {
                filtered = filtered.filter(product => product.company.toLowerCase().includes(searchCompany.toLowerCase()));
            }
            setFilteredProducts(filtered);
        };

        applyFilters();
    }, [titleFilter, companyFilter, colorFilter, priceFilter, headphoneTypeFilter, searchCompany, products]);

    const handleTitleFilterChange = (e) => {
        setTitleFilter(e.target.value);
    };

    const handleCompanyFilterChange = (e) => {
        setCompanyFilter(e.target.value);
    };

    const handleColorFilterChange = (e) => {
        setColorFilter(e.target.value);
    };

    const handlePriceFilterChange = (e) => {
        setPriceFilter(e.target.value);
    };

    const handleHeadphoneTypeFilterChange = (e) => {
        setHeadphoneTypeFilter(e.target.value);
    };

    const handleSearchCompanyChange = (e) => {
        setSearchCompany(e.target.value);
    };


    // Static options for color, price, and headphone type
    const colorOptions = ['Black', 'White', 'Red', 'Blue'];
    const priceOptions = ['50', '100', '150', '200'];
    const headphoneTypeOptions = ['Over-ear', 'On-ear', 'In-ear'];

    // Static options for company filter
    const companyOptions = ['sony', 'max', 'Company C'];

    return (
        <div className="App">
            <div className='header'>
                <div className="search-input">
                    <input type="text" value={searchCompany} onChange={handleSearchCompanyChange} placeholder="Search by company" />
                </div>

                <div className="filter-dropdown" >
                    <select value={titleFilter} onChange={handleTitleFilterChange}>
                        <option value="">All Titles</option>
                        {products.map(product => (
                            <option key={product.id} value={product.title}>{product.title}</option>
                        ))}
                    </select>

                    <select value={companyFilter} onChange={handleCompanyFilterChange}>
                        <option value="">All Companies</option>
                        {companyOptions.map((company, index) => (
                            <option key={index} value={company}>{company}</option>
                        ))}
                    </select>

                    <select value={colorFilter} onChange={handleColorFilterChange}>
                        <option value="">All Colors</option>
                        {colorOptions.map((color, index) => (
                            <option key={index} value={color}>{color}</option>
                        ))}
                    </select>

                    <select value={priceFilter} onChange={handlePriceFilterChange}>
                        <option value="">All Prices</option>
                        {priceOptions.map((price, index) => (
                            <option key={index} value={price}>{price}</option>
                        ))}
                    </select>

                    <select value={headphoneTypeFilter} onChange={handleHeadphoneTypeFilterChange}>
                        <option value="">All Types</option>
                        {headphoneTypeOptions.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="product-container">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.title} className="product-image" />
                                <div className="product-details">
                                    <h3>{product.title}</h3>
                                    <p>Company: {product.company}</p>
                                    <p>Color: {product.color}</p>
                                    <p>Price: {product.price}</p>
                                    <p>Type: {product.headphoneType}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
