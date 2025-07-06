import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      {products.map((product, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <p>{product.description}</p>
          <p><b>Category:</b> {product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
