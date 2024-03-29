import React, { useState } from 'react';

const productsData = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    // Add more products as needed
];

function Search() {
    const [query, setQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);

        // Filter products based on the search query
        const filtered = productsData.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search by product name..."
            />
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
