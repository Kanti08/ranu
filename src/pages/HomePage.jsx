import React from "react";
import Home from "../components/Home/Home"
//import ProductList from "../components/Home/ProductList";





const HomePage = () => {
  
    return (
        <div>
           
          <Home/>
            {/* <div className="container text-center">
                <div className="row row-cols-4">
                    <div className="col">
                        <div className="card">
                            <img src="image1.jpg" className="card-img-top" alt="Image 1" />
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="image2.jpg" className="card-img-top" alt="Image 2" />
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="image3.jpg" className="card-img-top" alt="Image 3" />
                            <div className="card-body">
                                <h5 className="card-title">Card 3</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="image4.jpg" className="card-img-top" alt="Image 4" />
                            <div className="card-body">
                                <h5 className="card-title">Card 4</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        
          
        </div>
      
    );
}
export default HomePage;

// import React, { useState } from 'react';
// import './home.css';

// function App() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filterOption, setFilterOption] = useState('');
//     const [products, setProducts] = useState([
//         { id: 1, name: 'Product 1', category: 'Category A' },
//         { id: 2, name: 'Product 2', category: 'Category B' },
//         { id: 3, name: 'Product 3', category: 'Category A' },
//         { id: 4, name: 'Product 4', category: 'Category C' },
//         { id: 5, name: 'Product 5', category: 'Category B' },
//         { id: 6, name: 'Product 6', category: 'Category A' },
//         { id: 7, name: 'Product 7', category: 'Category C' },
//         { id: 8, name: 'Product 8', category: 'Category A' },
//         { id: 9, name: 'Product 9', category: 'Category B' },
//         { id: 10, name: 'Product 10', category: 'Category C' },
//         { id: 11, name: 'Product 11', category: 'Category A' },
//         { id: 12, name: 'Product 12', category: 'Category B' },
//         { id: 13, name: 'Product 13', category: 'Category C' },
//     ]);

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleFilterChange = (e) => {
//         setFilterOption(e.target.value);
//     };

//     const filteredProducts = products.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     ).filter((product) =>
//         filterOption === '' || product.category === filterOption
//     );

//     return (
//         <div className="App">
//             <div className="header">
//                 <h1>Welcome to our Store</h1>
//                 <input
//                     type="text"
//                     placeholder="Search products..."
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                 />
//                 <select onChange={handleFilterChange} value={filterOption}>
//                     <option value="">All</option>
//                     <option value="Category A">Category A</option>
//                     <option value="Category B">Category B</option>
//                     <option value="Category C">Category C</option>
//                     {/* Add more categories as needed */}
//                 </select>
//             </div>
//             <div className="product-container">
//                 {filteredProducts.map((product) => (
//                     <div key={product.id} className="product-card">
//                         <h3>{product.name}</h3>
//                         <p>Category: {product.category}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;
