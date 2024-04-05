// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import ProductCard from "../components/Home/ProductCard";
// // import "./home.css"

// // const ProductPage = () => {
// //     const [products, setProducts] = useState([]);
// //     const [filteredProducts, setFilteredProducts] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [titleFilter, setTitleFilter] = useState('');
// //     const [companyFilter, setCompanyFilter] = useState('');
// //     const [searchCompany, setSearchCompany] = useState('');

// //     useEffect(() => {
// //         async function fetchProducts() {
// //             try {
// //                 const response = await axios.get('http://localhost:8001/api/products/product');
// //                 setProducts(response.data);
// //                 setLoading(false);
// //             } catch (error) {
// //                 console.error('Error fetching products:', error);
// //                 setLoading(false);
// //             }
// //         }

// //         fetchProducts();
// //     }, []);

// //     useEffect(() => {
// //         // Apply filters based on title, company, and searchCompany
// //         const applyFilters = () => {
// //             let filtered = [...products];
// //             if (titleFilter !== '') {
// //                 filtered = filtered.filter(product => product.title.toLowerCase() === titleFilter.toLowerCase());
// //             }
// //             if (companyFilter !== '') {
// //                 filtered = filtered.filter(product => product.company.toLowerCase() === companyFilter.toLowerCase());
// //             }
// //             if (searchCompany !== '') {
// //                 filtered = filtered.filter(product => product.company.toLowerCase().includes(searchCompany.toLowerCase()));
// //             }
// //             setFilteredProducts(filtered);
// //         };

// //         applyFilters();
// //     }, [titleFilter, companyFilter, searchCompany, products]);

// //     const handleTitleFilterChange = (e) => {
// //         setTitleFilter(e.target.value);
// //     };

// //     const handleCompanyFilterChange = (e) => {
// //         setCompanyFilter(e.target.value);
// //     };

// //     const handleSearchCompanyChange = (e) => {
// //         setSearchCompany(e.target.value);
// //     };

// //     // Static company names
// //     const companyOptions = ['Company A', 'Company B', 'Company C'];

// //     return (
// //         <div className="App">
// //             <div className='header'> <select value={titleFilter} onChange={handleTitleFilterChange}>
// //                 <option value="">All Titles</option>
// //                 {products.map(product => (
// //                     <option key={product.id} value={product.title}>{product.title}</option>
// //                 ))}
// //             </select>

// //                 {/* Static dropdown menu for filtering by company */}
// //                 <select value={companyFilter} onChange={handleCompanyFilterChange}>
// //                     <option value="">All Companies</option>
// //                     {companyOptions.map((company, index) => (
// //                         <option key={index} value={company}>{company}</option>
// //                     ))}
// //                 </select>
// //                 <input type="text" value={searchCompany} onChange={handleSearchCompanyChange} placeholder="Search by company" />
// //                 </div>
// //             {/* Dropdown menu for filtering by product title */}
            

// //             {/* Search bar for filtering by company */}


// //             {/* Display filtered products */}
// //             <div>
// //                 {loading ? (
// //                     <p>Loading...</p>
// //                 ) : (
// //                         <div   className="product-container">
// //                         {filteredProducts.map(product => (
// //                             <ProductCard key={product.id} product={product}  />
// //                         ))}
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ProductPage;
// // // import React, { useState } from 'react';
// // // import './home.css';

// // // function App() {
// // //     const [searchQuery, setSearchQuery] = useState('');
// // //     const [filterOption, setFilterOption] = useState('');
// // //     const [products, setProducts] = useState([
// // //         { id: 1, name: 'Product 1', category: 'Category A' },
// // //         { id: 2, name: 'Product 2', category: 'Category B' },
// // //         { id: 3, name: 'Product 3', category: 'Category A' },
// // //         { id: 4, name: 'Product 4', category: 'Category C' },
// // //         { id: 5, name: 'Product 5', category: 'Category B' },
// // //         { id: 6, name: 'Product 6', category: 'Category A' },
// // //         { id: 7, name: 'Product 7', category: 'Category C' },
// // //         { id: 8, name: 'Product 8', category: 'Category A' },
// // //         { id: 9, name: 'Product 9', category: 'Category B' },
// // //         { id: 10, name: 'Product 10', category: 'Category C' },
// // //         { id: 11, name: 'Product 11', category: 'Category A' },
// // //         { id: 12, name: 'Product 12', category: 'Category B' },
// // //         { id: 13, name: 'Product 13', category: 'Category C' },
// // //     ]);

// // //     const handleSearchChange = (e) => {
// // //         setSearchQuery(e.target.value);
// // //     };

// // //     const handleFilterChange = (e) => {
// // //         setFilterOption(e.target.value);
// // //     };

// // //     const filteredProducts = products.filter((product) =>
// // //         product.name.toLowerCase().includes(searchQuery.toLowerCase())
// // //     ).filter((product) =>
// // //         filterOption === '' || product.category === filterOption
// // //     );

// // //     return (
// // //         <div className="App">
// // //             <div className="header">
// // //                 <h1>Welcome to our Store</h1>
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Search products..."
// // //                     value={searchQuery}
// // //                     onChange={handleSearchChange}
// // //                 />
// // //                 <select onChange={handleFilterChange} value={filterOption}>
// // //                     <option value="">All</option>
// // //                     <option value="Category A">Category A</option>
// // //                     <option value="Category B">Category B</option>
// // //                     <option value="Category C">Category C</option>
// // //                     {/* Add more categories as needed */}
// // //                 </select>
// // //             </div>
// // //             <div className="product-container">
// // //                 {filteredProducts.map((product) => (
// // //                     <div key={product.id} className="product-card">
// // //                         <h3>{product.name}</h3>
// // //                         <p>Category: {product.category}</p>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from "../components/Home/ProductCard";
// import "./home.css"

// const ProductPage = () => {
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [titleFilter, setTitleFilter] = useState('');
//     const [companyFilter, setCompanyFilter] = useState('');
//     const [colorFilter, setColorFilter] = useState('');
//     const [priceFilter, setPriceFilter] = useState('');
//     const [headphoneTypeFilter, setHeadphoneTypeFilter] = useState('');
//     const [searchCompany, setSearchCompany] = useState('');

   

//     useEffect(() => {
//         async function fetchProducts() {
//             try {
//                 const response = await axios.get('http://localhost:8001/api/products/product');
//                 setProducts(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//                 setLoading(false);
//             }
//         }

//         fetchProducts();
//     }, []);

//     useEffect(() => {
//         // Apply filters based on title, company, and searchCompany
//         const applyFilters = () => {
//             let filtered = [...products];
//             if (titleFilter !== '') {
//                 filtered = filtered.filter(product => product.title.toLowerCase() === titleFilter.toLowerCase());
//             }
//             if (companyFilter !== '') {
//                 filtered = filtered.filter(product => product.company.toLowerCase() === companyFilter.toLowerCase());
//             }
//             if (colorFilter !== '') {
//                 filtered = filtered.filter(product => product.color.toLowerCase() === colorFilter.toLowerCase());
//             }
//             if (priceFilter !== '') {
//                 filtered = filtered.filter(product => product.price === parseInt(priceFilter));
//             }
//             if (headphoneTypeFilter !== '') {
//                 filtered = filtered.filter(product => product.headphoneType.toLowerCase() === headphoneTypeFilter.toLowerCase());
//             }
//             if (searchCompany !== '') {
//                 filtered = filtered.filter(product => product.company.toLowerCase().includes(searchCompany.toLowerCase()));
//             }
//             setFilteredProducts(filtered);
//         };

//         applyFilters();
//     }, [titleFilter, companyFilter, colorFilter, priceFilter, headphoneTypeFilter, searchCompany, products]);

//     const handleTitleFilterChange = (e) => {
//         setTitleFilter(e.target.value);
//     };

//     const handleCompanyFilterChange = (e) => {
//         setCompanyFilter(e.target.value);
//     };

//     const handleColorFilterChange = (e) => {
//         setColorFilter(e.target.value);
//     };

//     const handlePriceFilterChange = (e) => {
//         setPriceFilter(e.target.value);
//     };

//     const handleHeadphoneTypeFilterChange = (e) => {
//         setHeadphoneTypeFilter(e.target.value);
//     };

//     const handleSearchCompanyChange = (e) => {
//         setSearchCompany(e.target.value);
//     };

//     // Static options for color, price, and headphone type
//     const colorOptions = ['Black', 'White', 'Red', 'Blue'];
//     const priceOptions = ['50', '100', '150', '200'];
//     const headphoneTypeOptions = ['Over-ear', 'On-ear', 'In-ear'];

//     // Static options for company filter
//     const companyOptions = ['sony', 'max', 'Company C'];
//     console.log("products",products)
//     return (
//         <div className="App">
//             <div className='header'>
//                 <div className="search-input">
//                     <input type="text" value={searchCompany} onChange={handleSearchCompanyChange} placeholder="Search by company" />
                  
//                 </div>
//                 {/* <select value={titleFilter} onChange={handleTitleFilterChange}>
//                     <option value="">All Titles</option>
//                     {products.map(product => (
//                         <option key={product.id} value={product.title}>{product.title}</option>
//                     ))}
//                 </select>

//                 <select value={companyFilter} onChange={handleCompanyFilterChange}>
//                     <option value="">All Companies</option>
//                     {companyOptions.map((company, index) => (
//                         <option key={index} value={company}>{company}</option>
//                     ))}
//                 </select>

//                 <select value={colorFilter} onChange={handleColorFilterChange}>
//                     <option value="">All Colors</option>
//                     {colorOptions.map((color, index) => (
//                         <option key={index} value={color}>{color}</option>
//                     ))}
//                 </select>

//                 <select value={priceFilter} onChange={handlePriceFilterChange}>
//                     <option value="">All Prices</option>
//                     {priceOptions.map((price, index) => (
//                         <option key={index} value={price}>{price}</option>
//                     ))}
//                 </select>

//                 <select value={headphoneTypeFilter} onChange={handleHeadphoneTypeFilterChange}>
//                     <option value="">All Types</option>
//                     {headphoneTypeOptions.map((type, index) => (
//                         <option key={index} value={type}>{type}</option>
//                     ))}
//                 </select> */}

//                 {/* <input type="text" value={searchCompany} onChange={handleSearchCompanyChange} placeholder="Search by company" /> */}
//                 <div className="filter-dropdown" >
                        
                   
//                     <select value={titleFilter} onChange={handleTitleFilterChange}>
//                         <option value="">All Titles</option>
//                         {products.map(product => (
//                             <option key={product.id} value={product.title}>{product.title}</option>
//                         ))}
//                     </select>

//                     <select value={companyFilter} onChange={handleCompanyFilterChange}>
//                         <option value="">All Companies</option>
//                         {companyOptions.map((company, index) => (
//                             <option key={index} value={company}>{company}</option>
//                         ))}
//                     </select>

//                     <select value={colorFilter} onChange={handleColorFilterChange}>
//                         <option value="">All Colors</option>
//                         {colorOptions.map((color, index) => (
//                             <option key={index} value={color}>{color}</option>
//                         ))}
//                     </select>

//                     <select value={priceFilter} onChange={handlePriceFilterChange}>
//                         <option value="">All Prices</option>
//                         {priceOptions.map((price, index) => (
//                             <option key={index} value={price}>{price}</option>
//                         ))}
//                     </select>

//                     <select value={headphoneTypeFilter} onChange={handleHeadphoneTypeFilterChange}>
//                         <option value="">All Types</option>
//                         {headphoneTypeOptions.map((type, index) => (
//                             <option key={index} value={type}>{type}</option>
//                         ))}
//                     </select>
//                 </div>

                
//             </div>

//             <div >
               
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                         <div className="product-container" >
                            
//                         {filteredProducts.map(product => (
//                             <ProductCard key={product.id} product={product}  />
//                         ))}
                       
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from "../components/Home/ProductCard";
// import "./home.css"

// const ProductPage = () => {
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [titleFilter, setTitleFilter] = useState('');
//     const [companyFilter, setCompanyFilter] = useState('');
//     const [searchCompany, setSearchCompany] = useState('');

//     useEffect(() => {
//         async function fetchProducts() {
//             try {
//                 const response = await axios.get('http://localhost:8001/api/products/product');
//                 setProducts(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//                 setLoading(false);
//             }
//         }

//         fetchProducts();
//     }, []);

//     useEffect(() => {
//         // Apply filters based on title, company, and searchCompany
//         const applyFilters = () => {
//             let filtered = [...products];
//             if (titleFilter !== '') {
//                 filtered = filtered.filter(product => product.title.toLowerCase() === titleFilter.toLowerCase());
//             }
//             if (companyFilter !== '') {
//                 filtered = filtered.filter(product => product.company.toLowerCase() === companyFilter.toLowerCase());
//             }
//             if (searchCompany !== '') {
//                 filtered = filtered.filter(product => product.company.toLowerCase().includes(searchCompany.toLowerCase()));
//             }
//             setFilteredProducts(filtered);
//         };

//         applyFilters();
//     }, [titleFilter, companyFilter, searchCompany, products]);

//     const handleTitleFilterChange = (e) => {
//         setTitleFilter(e.target.value);
//     };

//     const handleCompanyFilterChange = (e) => {
//         setCompanyFilter(e.target.value);
//     };

//     const handleSearchCompanyChange = (e) => {
//         setSearchCompany(e.target.value);
//     };

//     // Static company names
//     const companyOptions = ['Company A', 'Company B', 'Company C'];

//     return (
//         <div className="App">
//             <div className='header'> <select value={titleFilter} onChange={handleTitleFilterChange}>
//                 <option value="">All Titles</option>
//                 {products.map(product => (
//                     <option key={product.id} value={product.title}>{product.title}</option>
//                 ))}
//             </select>

//                 {/* Static dropdown menu for filtering by company */}
//                 <select value={companyFilter} onChange={handleCompanyFilterChange}>
//                     <option value="">All Companies</option>
//                     {companyOptions.map((company, index) => (
//                         <option key={index} value={company}>{company}</option>
//                     ))}
//                 </select>
//                 <input type="text" value={searchCompany} onChange={handleSearchCompanyChange} placeholder="Search by company" />
//                 </div>
//             {/* Dropdown menu for filtering by product title */}


//             {/* Search bar for filtering by company */}


//             {/* Display filtered products */}
//             <div>
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                         <div   className="product-container">
//                         {filteredProducts.map(product => (
//                             <ProductCard key={product.id} product={product}  />
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductPage;
// // import React, { useState } from 'react';
// // import './home.css';

// // function App() {
// //     const [searchQuery, setSearchQuery] = useState('');
// //     const [filterOption, setFilterOption] = useState('');
// //     const [products, setProducts] = useState([
// //         { id: 1, name: 'Product 1', category: 'Category A' },
// //         { id: 2, name: 'Product 2', category: 'Category B' },
// //         { id: 3, name: 'Product 3', category: 'Category A' },
// //         { id: 4, name: 'Product 4', category: 'Category C' },
// //         { id: 5, name: 'Product 5', category: 'Category B' },
// //         { id: 6, name: 'Product 6', category: 'Category A' },
// //         { id: 7, name: 'Product 7', category: 'Category C' },
// //         { id: 8, name: 'Product 8', category: 'Category A' },
// //         { id: 9, name: 'Product 9', category: 'Category B' },
// //         { id: 10, name: 'Product 10', category: 'Category C' },
// //         { id: 11, name: 'Product 11', category: 'Category A' },
// //         { id: 12, name: 'Product 12', category: 'Category B' },
// //         { id: 13, name: 'Product 13', category: 'Category C' },
// //     ]);

// //     const handleSearchChange = (e) => {
// //         setSearchQuery(e.target.value);
// //     };

// //     const handleFilterChange = (e) => {
// //         setFilterOption(e.target.value);
// //     };

// //     const filteredProducts = products.filter((product) =>
// //         product.name.toLowerCase().includes(searchQuery.toLowerCase())
// //     ).filter((product) =>
// //         filterOption === '' || product.category === filterOption
// //     );

// //     return (
// //         <div className="App">
// //             <div className="header">
// //                 <h1>Welcome to our Store</h1>
// //                 <input
// //                     type="text"
// //                     placeholder="Search products..."
// //                     value={searchQuery}
// //                     onChange={handleSearchChange}
// //                 />
// //                 <select onChange={handleFilterChange} value={filterOption}>
// //                     <option value="">All</option>
// //                     <option value="Category A">Category A</option>
// //                     <option value="Category B">Category B</option>
// //                     <option value="Category C">Category C</option>
// //                     {/* Add more categories as needed */}
// //                 </select>
// //             </div>
// //             <div className="product-container">
// //                 {filteredProducts.map((product) => (
// //                     <div key={product.id} className="product-card">
// //                         <h3>{product.name}</h3>
// //                         <p>Category: {product.category}</p>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

// // export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from "../components/Home/ProductCard";
import "./home.css"
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { BASE_URL } from '../../util';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
   
    const [companyFilter, setCompanyFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [headphoneTypeFilter, setHeadphoneTypeFilter] = useState('');
    const [searchCompany, setSearchCompany] = useState('');



    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get(`${BASE_URL}/api/products/product`);
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
    }, [ companyFilter, colorFilter, priceFilter, headphoneTypeFilter, searchCompany, products]);

   

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
    const priceOptions = ['3500', '599', '1500', '1300','3990'];
    const headphoneTypeOptions = ['Over-ear headphone', 'In-ear headphone', 'On-ear headphone '];
    

    // Static options for company filter
    const companyOptions = ['Featured','JBL','Sony','Boat','Zebronics','Marshall','Ptro'];

    return (
        <div className="App">
            <div className='header'>
               
                <div className="search-input">
                    <input type="text" value={searchCompany} onChange={handleSearchCompanyChange} placeholder="Search by company" />

                </div>
                

                {/* <input type="text" value={searchCompany} onChange={handleSearchCompanyChange} placeholder="Search by company" /> */}
                <div className="filter-dropdown" >
                    
                  
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

            <div >

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="product-container" >

                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;

